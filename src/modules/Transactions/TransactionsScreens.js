import { useRoute } from '@react-navigation/native';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { TextInput, TouchableOpacity, View, Text, ScrollView, Image, Platform } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import { useDispatch, useSelector } from 'react-redux';
import { getTransaction } from '../../redux/actions/tansaction';
import { showLoader } from '../../redux/actions/user';
import { horizontalScale, moderateScale, verticalScale } from '../../theme';
import { FilterModal } from './components';
import styling from './TransactionsStyle';
import { navigationStrings } from '../../constants';
import { Fonts, Icons } from '../../assets';

const TransactionsScreens = ({ navigation }) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const userDetails = useSelector(state => state?.user?.login)
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false);
  const transaction = useSelector(state => state?.user?.transaction)
  useEffect(() => {
    (async () => {
      const unsubscribe = navigation.addListener('focus', async () => {
        await dispatch(showLoader(true))
        let data = {
          account_id: userDetails?.data?.accountDetail?.[0]?.id,
          transaction_type: 'pending',
          limit: 100
        }
        await dispatch(getTransaction(data))
        await dispatch(showLoader(false))
      });
      return unsubscribe;
    })()
  }, [])

  const getTransactionById = async (item) => {
    navigation.navigate(navigationStrings.TransacationDeatils, { item })
  }
  const getHeadText = (item) => {
    if (item?.type === 'ach') {
      return `${item?.front_user_name}`
    } else if (item?.type === 'INTERNAL_TRANSFER') {
      return `Transfer Free`
    } else if (item?.type === 'check') {
      return `Deposit Cheque`
    } else if (item?.type === 'CARD') {
      return `${item?.merchant?.name}`
    } else {
      return `${item?.front_user_name}`
    }
  }
  const getColor = (item) => {
    if (item?.type === 'ach') {
      return `#DFF7FF`
    } else if (item?.type === 'INTERNAL_TRANSFER') {
      return `#F9FEDA`
    } else if (item?.type === 'check') {
      return `#F9EFFF`
    } else {
      return `#DFF7FF`
    }
  }
  const getImage = (item) => {
    if (item?.type === 'ach') {
      return Icons.ach_transfer
    } else if (item?.type === 'INTERNAL_TRANSFER') {
      return Icons.dollor_transfer
    } else if (item?.type === 'check') {
      return Icons.bank_transfer
    } else if (item?.type === 'CARD') {
      return Icons.credit_card
    } else {
      return Icons.ach_transfer
    }
  }
  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.searchPanel}>
          <View style={styles.searchBarParent}>
            <View style={styles.searchRightIcon}>
              <FontistoIcon name="search" size={Platform.OS === "web" ? 18 : moderateScale(18)} color={"#848484"} />
            </View>
            <View style={styles.searchBar}>
              <TextInput placeholder={'Search'} placeholderTextColor={"#848484"} />
            </View>
          </View>
          <View style={styles.filterParent}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <FeatherIcon name="filter" color={"#848484"} size={Platform.OS === "web" ? 25 : moderateScale(22)} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, marginBottom: 10 }}>
          {transaction && transaction.length > 0 ? transaction.map((item, index) => {
            return (
              <TouchableOpacity style={{ width: '99%', backgroundColor: 'white', borderRadius: 8, padding: Platform.OS === "web" ? 8 : horizontalScale(10), flexDirection: 'row', marginTop: Platform.OS === "web" ? 8 : 12, justifyContent: 'space-between', elevation: 4, marginLeft: 1, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '87%' }}>
                  <View style={{ height: verticalScale(60), width: verticalScale(60), backgroundColor: getColor(item), borderRadius: verticalScale(80), justifyContent: 'center', alignItems: 'center' }} >
                    <Image source={getImage(item)} resizeMode='contain' style={{
                      height: verticalScale(35), width: verticalScale(35)
                    }}></Image>
                  </View>
                  <View style={{ marginLeft: horizontalScale(12) }}>
                    <Text style={styles.testStyle}>{getHeadText(item)}</Text>
                    <Text style={[styles.smallText]}>{moment(item?.transaction_time).format('LLLL')}</Text>
                  </View>
                </View>
                <View>
                  <Text style={[styles.testStyle1, { color: item?.front_user_dc_sign === 'credit' ? 'red' : 'green' }]}>{item?.amount_text}</Text>
                </View>
              </TouchableOpacity>
            )
          })
            :
            <Text style={{
              color: '#000',
              fontSize: Platform.OS === "web" ? 20 : horizontalScale(20),
              alignSelf: 'center',
              fontFamily: Fonts.bold,
              marginTop: Platform.OS === "web" ? 150 : horizontalScale(100)
            }} >No transaction found</Text>
          }
        </View>
        <FilterModal
          visible={modalVisible}
          onPressBack={() => setModalVisible(false)}
          theme={theme}
          setModalVisible={setModalVisible}
        />
      </ScrollView>
    </View>
  );
};

export default TransactionsScreens;
