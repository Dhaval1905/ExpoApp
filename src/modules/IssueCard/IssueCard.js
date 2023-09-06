import {useRoute} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CustomHeader} from '../../components';
import {navigationStrings, Strings} from '../../constants';
import {Colors, moderateScale} from '../../theme';
import styling from './IssueCardStyle';
import { getProductCard, issue_Card } from '../../redux/actions/card';
import { useDispatch, useSelector } from 'react-redux';
import { showLoader } from '../../redux/actions/user';
import { showMessage } from 'react-native-flash-message';

const RethinkCardScreen = ({navigation}) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const userDetails = useSelector(state => state?.user?.login)
  const [virtualCard,setVirtualCard] =useState([])
  const [physicalCard,setPhysicalCard] =useState([])

  const issueCard=async(type)=>{
    await dispatch(showLoader(true))
                 let data={
                  customer_id: userDetails?.data?.personDetail?.[0]?.id,
    account_id: userDetails?.data?.accountDetail?.[0]?.id,
    form :type
                }
                let res=await issue_Card(data)
    await dispatch(showLoader(false))
if(res?.response?.data?.status===0){
  showMessage({
    message: res?.response?.data?.message,
    type: "danger",
});
}else{
  showMessage({
    message: "Card issued successfully!",
    type: "success",
});
navigation.navigate(navigationStrings.RETHINKCARD)
}
  }

  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={"Issue New Card"}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => issueCard("VIRTUAL")}>
          <View style={styles.innerView}>
            <FontAwesome
              name={'credit-card'}
              color={Colors[theme]?.black}
              size={moderateScale(24)}
            />
            <Text style={styles.cardTitle}>{Strings.virtualCard}</Text>
          </View>
          {/* <FontAwesome 
            name={'angle-right'}
            color={Colors[theme]?.grey500}
            size={moderateScale(24)}
          /> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            issueCard("PHYSICAL")
          }>
          <View style={styles.innerView}>
            <FontAwesome
              name={'credit-card'}
              color={Colors[theme]?.black}
              size={moderateScale(24)}
            />
            <Text style={styles.cardTitle}>{Strings.physicalCard}</Text>
          </View>
          {/* <FontAwesome
            name={'angle-right'}
            color={Colors[theme]?.grey500}
            size={moderateScale(24)}
          /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RethinkCardScreen;
