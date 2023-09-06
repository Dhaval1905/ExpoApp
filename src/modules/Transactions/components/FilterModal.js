import moment from 'moment';
import React, { useState } from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  CategoryItem,
  CustomButton,
  CustomHeader,
  ModalButton,
} from '../../../components';
import {dateRange, Strings} from '../../../constants';
import {useFilterData} from '../../../hooks';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../theme';
import styling from './styles/FilterModalStyles';
import { Fonts, Icons } from '../../../assets';
import { useDispatch, useSelector } from 'react-redux';
import { getTransaction } from '../../../redux/actions/tansaction';
import { showLoader } from '../../../redux/actions/user';

const FilterModal = ({onPressBack, visible, theme,setModalVisible}) => {
  const styles = styling(theme);
  const userDetails = useSelector(state => state?.user?.login)
  const dispatch = useDispatch()
  const [demo,setDemo]=useState(false)
  const [transactionsTypes,setTransactionsTypes]=useState([
    {
      title:"ACH",
      image:Icons.ach_transfer,
      color:'#F9EFFF',
      status:false
    },
    {
      title:"WIRE",
      image:Icons.bank_transfer,
      color:'#DFF7FF',
      status:false
    },
    {
      title:"Internal Transfer",
      image:Icons.dollor_transfer,
      color:'#F9FEDA',
      status:false
    }
  ])
  const {
    open,
    toDate,
    fromDate,
    isFromDate,
    categoryOpen,
    dateRangeOpen,
    selectedCategory,
    selectedDateRange,
    transactionTypeData,
    setOpen,
    setToDate,
    setFromDate,
    setIsFromDate,
    setCategoryOpen,
    setDateRangeOpen,
    setSelectedCategory,
    setSelectedDateRange,
    setTransactionTypeData,
  } = useFilterData();

  const onPressSelectAll = (type, data, isSelectedAll) => {
    if (isSelectedAll) {
      const transactionObj = transactionTypeData;
      delete transactionObj?.[type];
      setTransactionTypeData({...transactionObj});
    } else {
      setTransactionTypeData({...transactionTypeData, [type]: data});
    }
  };

  const setType=async(index)=>{
    transactionsTypes.forEach((element,i) => {
      if(i===index){
        element.status=true
      }else{
        element.status=false
      }
    });
    setTransactionsTypes(transactionsTypes)
    setDemo(!demo)
  }

  return (
    <Modal visible={visible ?? false} style={{flex: 1}}>
      <SafeAreaView style={styles.screen}>
        <CustomHeader
          theme={theme}
          headerTitle={Strings.filter}
          onPressBack={onPressBack}
        />
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <View style={styles.card}>
              {/* <View style={styles.cardHeader}>
                <Text style={styles.cardHeaderText}>{Strings.dateRange}</Text>
              </View>
              <ModalButton
                theme={theme}
                buttonLable={Strings.dateRange?.toUpperCase()}
                buttonValue={selectedDateRange}
                width={horizontalScale(320)}
                marginTop={verticalScale(10)}
                marginBottom={verticalScale(15)}
                onPressButton={() => setDateRangeOpen(true)}
              /> */}
              <View style={styles.datePickerParent}>
                <ModalButton
                  theme={theme}
                  buttonLable={Strings.from?.toUpperCase()}
                  buttonValue={fromDate?moment(fromDate)
                    ?.format('MMM DD,YYYY')
                    ?.toString():''}
                  width={horizontalScale(155)}
                  marginRight={horizontalScale(10)}
                  onPressButton={() => {
                    setIsFromDate(true);
                    setOpen(true);
                  }}
                />
                <ModalButton
                  theme={theme}
                  buttonLable={Strings.to?.toUpperCase()}
                  buttonValue={toDate?moment(toDate)
                    ?.format('MMM DD,YYYY')
                    ?.toString():''}
                  width={horizontalScale(155)}
                  onPressButton={() => {
                    setOpen(true);
                  }}
                />
              </View>
              <View style={styles.cardHeader}>
                <Text style={styles.cardHeaderText}>
                  {Strings.transactionType}
                </Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:8}}>
              {transactionsTypes?.map((item, index) => {
                return (
                  <TouchableOpacity style={{alignItems:'center'}} onPress={()=>setType(index)}>
                  <View style={{ height: verticalScale(60), width: verticalScale(60), backgroundColor: item?.color, borderRadius: verticalScale(80), justifyContent: 'center', alignItems: 'center' }} >
                  <Image source={item?.image} resizeMode='contain' style={{
                       height: verticalScale(35), width: verticalScale(35)
                  }}></Image>
                </View>
                  <Text style={{fontFamily:Fonts.regular,color:item?.status?Colors[theme].blue:'#000',fontSize:12,marginTop:10}} >{item?.title}</Text>
                  </TouchableOpacity>
                )
              })}
              </View>
              {/* <View style={styles.cardHeader}>
                <Text style={styles.cardHeaderText}>
                  {"Sub Type"}
                </Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:horizontalScale(16)}}>
          <CustomButton
            theme={theme}
            buttonTitle={"Credit"}
            buttonTitleStyle={styles.applyFilter}
            buttonStyle={styles.applyFilterButton}
          />
          <CustomButton
            theme={theme}
            buttonTitle={"Debit"}
            buttonTitleStyle={styles.applyFilter}
            buttonStyle={styles.applyFilterButton}
          />
              </View> */}
            </View>
          </View>
        </ScrollView>
        <View style={styles.applyFilterParent}>
          <CustomButton
            theme={theme}
            buttonTitle={Strings.applyFilters}
            buttonTitleStyle={styles.applyFilter}
            buttonStyle={[styles.applyFilterButton,{width:'100%'}]}
            onBtnPress={async()=>{
              let type=""
              transactionsTypes.forEach((element)=>{
                if(element?.status){  
                type=element?.title.toLowerCase()
                }
              })
              await dispatch(showLoader(true))
              let data = {
                account_id: userDetails?.data?.accountDetail?.[0]?.id,
                transaction_type: 'pending',
                limit:100
              }
              if(fromDate) data.from_date=moment(fromDate).format('yyyy-MM-DD')
              if(toDate) data.to_date=moment(toDate).format('yyyy-MM-DD')
              if(type) data.type=type
              await dispatch(getTransaction(data))
              await dispatch(showLoader(false))
              setModalVisible(false)
            }}
          />
        </View>
        <DatePicker
          modal
          open={open}
          mode={'date'}
          date={isFromDate?fromDate?fromDate:toDate?toDate:new Date():new Date()}
          onConfirm={date => {
            isFromDate ? setFromDate(date) : setToDate(date);
            setIsFromDate(false);
            setOpen(false);
          }}
          onCancel={() => {
            setIsFromDate(false);
            setOpen(false);
          }}
        />
        {dateRangeOpen ? (
          <TouchableOpacity
            style={styles.dateRangePicker}
            activeOpacity={1}
            onPress={() => setDateRangeOpen(false)}>
            <View style={styles.dateRangePickerContainer}>
              <Text style={styles.dateRangePickerHeader}>
                {Strings.dateRange}
              </Text>
              <View style={styles.divider} />
              {dateRange?.map((item, index) => {
                const isSelcted = item === selectedDateRange;
                return (
                  <View key={index}>
                    <TouchableOpacity
                      style={styles.dateRangeDetailParent}
                      onPress={() => {
                        setSelectedDateRange(item);
                        setDateRangeOpen(false);
                      }}>
                      <Text
                        style={[
                          styles.dateRangeDetail,
                          isSelcted && styles.selectedDateRange,
                        ]}>
                        {item}
                      </Text>
                      {isSelcted ? (
                        <Icon
                          name="checkmark"
                          size={moderateScale(28)}
                          color={Colors[theme]?.blue}
                        />
                      ) : (
                        <></>
                      )}
                    </TouchableOpacity>
                    {index !== dateRange?.length - 1 ? (
                      <View
                        style={[
                          styles.divider,
                          {marginHorizontal: horizontalScale(14)},
                        ]}
                      />
                    ) : (
                      <></>
                    )}
                  </View>
                );
              })}
            </View>
          </TouchableOpacity>
        ) : (
          <></>
        )}
        {categoryOpen ? (
          <TouchableOpacity
            style={styles.dateRangePicker}
            activeOpacity={1}
            onPress={() => setCategoryOpen(false)}>
            <View style={styles.dateRangePickerContainer}>
              <Text style={styles.dateRangePickerHeader}>
                {Strings.category}
              </Text>
              <View style={styles.searchBarPanel}>
                <View style={styles.searchBarParent}>
                  <View style={styles.searchRightIcon}>
                    <FontistoIcon name="search" size={moderateScale(18)} />
                  </View>
                  <View style={styles.searchBar}>
                    <TextInput placeholder={Strings.searchByName} />
                  </View>
                </View>
              </View>
              <View style={styles.divider} />
              <ScrollView style={styles.categoryDetail}>
                <View style={styles.incomeParent}>
                  <Text style={styles.categoryDetailTitle}>
                    {Strings.income?.toUpperCase()}
                  </Text>
                  <CategoryItem
                    theme={theme}
                    categoryName={'Contact'}
                    iconSource={{
                      uri: 'https://www.clipartmax.com/png/middle/480-4800097_contact-us-contact-us-round-icon.png',
                    }}
                    onPressCategory={() => setCategoryOpen(false)}
                  />
                </View>
                <View style={styles.incomeParent}>
                  <Text style={styles.categoryDetailTitle}>
                    {Strings.spending?.toUpperCase()}
                  </Text>
                  <CategoryItem
                    theme={theme}
                    categoryName={'Contact'}
                    iconSource={{
                      uri: 'https://www.clipartmax.com/png/middle/480-4800097_contact-us-contact-us-round-icon.png',
                    }}
                    onPressCategory={() => setCategoryOpen(false)}
                  />
                </View>
              </ScrollView>
            </View>
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </SafeAreaView>
    </Modal>
  );
};

export default FilterModal;
