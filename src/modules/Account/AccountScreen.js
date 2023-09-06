import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { navigationStrings, Strings } from '../../constants';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';
import styling from './AccountStyle';
import Clipboard from '@react-native-community/clipboard';
import { showToast } from '../../utils/constant';
import { Icons } from '../../assets';
import { changeDashboard } from '../../redux/actions/initial';

const AccountScreen = ({ navigation }) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const dispatch = useDispatch()
  const accountInfo = useSelector(state => state?.user?.login)
  useEffect(() => {
    (async () => {
      const unsubscribe = navigation.addListener('focus', async () => {
        await dispatch(changeDashboard(false))
      });
      return unsubscribe;
    })();
  }, [])
  const [isView, setIsView] = useState(false)
  var names = [accountInfo?.data?.personDetail?.[0]?.first_name, accountInfo?.data?.personDetail?.[0]?.last_name],
    initials = names[0].substring(0, 1).toUpperCase();
  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  // console.log('-------', accountInfo?.data?.accountDetail)
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        {/* <TouchableOpacity>
          <Ionicons
            name={'share-outline'}
            color={Colors[theme]?.black}
            size={moderateScale(28)}
          />
        </TouchableOpacity> */}
      </View>
      <View style={styles.usernameParent}>
        <View style={{ height: horizontalScale(60), width: horizontalScale(60), borderRadius: horizontalScale(70), backgroundColor: '#DFF7FF', alignItems: 'center', justifyContent: 'center' }} >
          <Text style={[styles.detailText, { color: '#6DD8FC', alignSelf: 'center' }]} >{initials}</Text>
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.usernameS}>{accountInfo?.data?.personDetail?.[0]?.first_name} {accountInfo?.data?.personDetail?.[0]?.last_name}</Text>
          <Text style={styles.usernameT}>{'user'}</Text>
        </View>
      </View>
      <View style={styles.routingAccountNumberParent}>
        <View style={styles.accountNumberParent}>
          <View>
            <Text style={styles.accountNumber}>
              {"Account Info"}
            </Text>
            {/* {!isView ? <TouchableOpacity onPress={() => setIsView(!isView)}> 
              <Text style={[styles.subTitle, { marginTop: verticalScale(4), }]}>{`${accountInfo?.data?.accountDetail?.[0]?.account_number.substring(0, 6)}...`}</Text>
           </TouchableOpacity>
           : */}
            <TouchableOpacity onPress={() => setIsView(!isView)}>
              <Text style={[styles.subTitle, { marginTop: verticalScale(4), }]}>{`${accountInfo?.data?.accountDetail?.[0]?.account_number}`}</Text>
            </TouchableOpacity>
            {/* } */}
          </View>
          <TouchableOpacity style={{ height: horizontalScale(30), width: horizontalScale(30), borderRadius: horizontalScale(30), backgroundColor: '#F2F2F2', alignItems: 'center', justifyContent: 'center', marginLeft: 8 }} onPress={() => {
            Clipboard.setString(accountInfo?.data?.accountDetail?.[0]?.account_number);
            showToast('Copied');
          }}>
            <MaterialCommunityIcons
              name="content-copy"
              size={moderateScale(16)}
              color={Colors[theme]?.black}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.routingNumberParent}>
          <View style={styles.subTitleParent}>
            <View>
              <Text style={styles.routingNumber}>
                {"ACH Routing No."}
              </Text>
              <Text style={styles.subTitle}>{accountInfo?.data?.accountDetail?.[0]?.bank_routing}</Text>
            </View>
            <TouchableOpacity style={{ height: horizontalScale(30), width: horizontalScale(30), borderRadius: horizontalScale(30), backgroundColor: '#F2F2F2', alignItems: 'center', justifyContent: 'center', marginLeft: 8 }} onPress={() => {
              Clipboard.setString(accountInfo?.data?.accountDetail?.[0]?.bank_routing);
              showToast('Copied');
            }}>
              <MaterialCommunityIcons
                name="content-copy"
                size={moderateScale(16)}
                color={Colors[theme]?.black}
              />
            </TouchableOpacity>
          </View>
        </View>

      </View>
      <View style={styles.cardParent}>
        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#C3EBEE' }]}
          onPress={() => navigation.navigate(navigationStrings.RETHINKCARD)}>
          <Image source={Icons.physical_card} style={{ height: horizontalScale(38), width: horizontalScale(38) }} resizeMode='contain' />
          <Text style={styles.cardTitle}>{Strings.rethinkCard}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#FFF9CB' }]}
          onPress={() => navigation.navigate(navigationStrings.STATEMENTS)}>
          <Image source={Icons.statement} style={{ height: horizontalScale(38), width: horizontalScale(38) }} resizeMode='contain' />
          <Text style={styles.cardTitle}>{Strings.statement}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardParent}>
        <TouchableOpacity style={[styles.card, { backgroundColor: '#F1E0FF' }]} onPress={() => navigation.navigate(navigationStrings.SETTINGS)}>
          <Image source={Icons.setting} style={{ height: horizontalScale(35), width: horizontalScale(35) }} resizeMode='contain' />
          <Text style={styles.cardTitle}>{Strings.settings}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.SUPPORT)} style={[styles.card, { backgroundColor: '#D6DAFF' }]} >
          <Image source={Icons.info} style={{ height: horizontalScale(35), width: horizontalScale(35) }} resizeMode='contain' />
          <Text style={styles.cardTitle}>{Strings.support}</Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity
        style={styles.referParent}
        onPress={() => navigation.navigate(navigationStrings.REFERRALS)}>
        <Text
          style={styles.referBusiness}>{`${Strings.referBusiness} $40`}</Text>
        <FontAwesome
          name={'angle-right'}
          color={Colors[theme]?.grey500}
          size={moderateScale(24)}
        />
      </TouchableOpacity> */}
    </View>
  );
};

export default AccountScreen;
