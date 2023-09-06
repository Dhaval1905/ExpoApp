import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import { Text, TouchableOpacity, View, ScrollView,Image, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import { navigationStrings } from '../../../constants';
import { Strings } from '../../../constants/Strings';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../../theme';
import styling from './styles/TransactionCardStyle';
import { Icons } from '../../../assets';
import { ContentLoader1 } from '../../../components';

const TransactionCard = ({ title, noTrasaction, transactionData, theme }) => {
  const styles = styling(theme);
  const navigation = useNavigation()
  const dashBoardData = useSelector(state => state?.user?.dashBoard)

 const getHeadText=(item)=>{
  if(item?.type === 'ach'){
  return `${item?.front_user_name}`
  }else if(item?.type ==='INTERNAL_TRANSFER'){
return `Transfer Free`
  }else if(item?.type==='check'){
    return `Deposit Cheque`
  }else if(item?.type==='CARD'){
    return `${item?.merchant?.name}`
  } else {
    return `${item?.front_user_name}`
  }
  }
  const getColor=(item)=>{
    if(item?.type === 'ach'){
      return `#DFF7FF`
      }else if(item?.type ==='INTERNAL_TRANSFER'){
    return `#F9FEDA`
      }else if(item?.type==='check'){
        return `#F9EFFF`
      }else {
        return `#DFF7FF`
      }
  }

  const getImage=(item)=>{
    if(item?.type === 'ach'){
      return Icons.ach_transfer
      }else if(item?.type ==='INTERNAL_TRANSFER'){
    return Icons.dollor_transfer
      }else if(item?.type==='check'){
        return Icons.bank_transfer
      }else if(item?.type==='CARD'){
        return Icons.credit_card
      }else {
        return Icons.ach_transfer
      }
  }

  return (
    <View style={[styles.card, noTrasaction && { height: verticalScale(265) }]}>
      <View style={styles.cardHeader}>
        <Text style={styles.headerTitle}>
          {noTrasaction ? Strings.noTransaction : title}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.ACTIVITY)}>
          <Text style={styles.textStyle}>See All</Text>
        </TouchableOpacity>
      </View>
      {noTrasaction ? (
        <>
          <ContentLoader1 />
          {Platform.OS==='android' &&<ContentLoader1 />}
         {Platform.OS==='android' && <ContentLoader1 />}
        </>
      ) : (
        <View style={{ flex: 1, marginBottom: 10 }}>
          <ScrollView>
            {dashBoardData?.last_5_transactions_filtered && dashBoardData?.last_5_transactions_filtered.length > 0 && dashBoardData?.last_5_transactions_filtered.map((item, index) => {
              return (
                <>
                 <TouchableOpacity style={{ width: '100%', backgroundColor: 'white', borderRadius: 8, padding: horizontalScale(10), flexDirection: 'row', marginTop: 12, justifyContent: 'space-between',alignItems:'center' }} onPress={()=> navigation.navigate(navigationStrings.TransacationDeatils,{item})}>
                      <View style={{  flexDirection: 'row',alignItems:'center'}}>
                      <View style={{ height: verticalScale(58), width: verticalScale(58), backgroundColor: getColor(item), borderRadius: verticalScale(80), justifyContent: 'center', alignItems: 'center' }} >
                        <Image source={getImage(item)} resizeMode='contain' style={{
                             height: verticalScale(35), width: verticalScale(35)
                        }}></Image>
                      </View>
                      <View style={{marginLeft:horizontalScale(10)}}>
                        <Text style={styles.testStyle}>{getHeadText(item)}</Text>
                        <Text style={styles.smallText}>{moment(item?.transaction_time).format('LLLL')}</Text>
                      </View>
                      </View>
                      <View>
                        <Text style={[styles.testStyle1, { color: item?.front_user_dc_sign === 'credit' ? 'red' : 'green' }]}>{item?.amount_text}</Text>
                      </View>
                    </TouchableOpacity>
                </>
              )
            })}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default TransactionCard;
