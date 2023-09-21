import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, FlatList, Platform } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useDispatch, useSelector } from 'react-redux';
import { CustomButton, CustomHeader } from '../../components';
import { navigationStrings, Strings } from '../../constants';
import { externalAccountGet } from '../../redux/actions/ach';
import { showLoader } from '../../redux/actions/user';
import { Colors, horizontalScale, moderateScale } from '../../theme';
import styling from './AddPayeeStyle';

const AddPayeeScreen = ({ navigation }) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const dispatch = useDispatch();
  const userDetails = useSelector(state => state?.user?.login)
  const [externalAccount, setExternalAccount] = useState([]);

  useEffect(() => {
    (async () => {
      await dispatch(showLoader(true))
      let data = {
        customer_id: userDetails?.data?.personDetail?.[0]?.id,
        vendor_type: "MANUAL",
        take_from: ""
      }
      let externalAccountList = await externalAccountGet(data)
      setExternalAccount(externalAccountList?.data?.data?.external_accounts)
      await dispatch(showLoader(false))
    })()
  }, [])
  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={"Send Money"}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Text style={styles.choosePayMethod}>
          {Strings.choosePayMethod?.toUpperCase()}
        </Text>
        <FlatList
          data={externalAccount}
          renderItem={({ item }) => {
            var names = item?.account_owner_names?.[0].split(' '),
              initials = names[0].substring(0, 1).toUpperCase();
            if (names.length > 1) {
              initials += names[names.length - 1].substring(0, 1).toUpperCase();
            }
            return (
              <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row', marginTop: Platform.OS === "web" ? 15 : horizontalScale(15) }} onPress={() => navigation.navigate(navigationStrings.SelectTransfer, { item })}>
                <View style={{ height: 50, width: 50, borderRadius: 80, backgroundColor: '#DFF7FF', marginLeft: 8, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={[styles.detailText, { color: '#6DD8FC' }]} >{initials}</Text>
                </View>
                <Text style={styles.detailText1}>
                  {item?.account_owner_names}
                </Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          navigation.navigate(navigationStrings.BANKTRANSFER)
        }}>
        <View style={styles.leftParent}>
          <FontAwesomeIcon
            name={'user-plus'}
            size={Platform.OS === "web" ? 22 : moderateScale(22)}
            color={Colors[theme]?.white}
          />
        </View>
        <View style={styles.detailParent}>
          <Text style={styles.detailText}>{"Add Payee"}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AddPayeeScreen;
