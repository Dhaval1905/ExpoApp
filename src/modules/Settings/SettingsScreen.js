import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Alert, Image, Platform } from 'react-native';
import { Switch } from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import { CustomButton, CustomHeader } from '../../components';
import {
  navigationStrings,
  settings,
  settingsAccountInformation,
  Strings,
} from '../../constants';
import { showLoader } from '../../redux/actions/user';
import { Colors, horizontalScale, moderateScale } from '../../theme';
import styling from './SettingsStyle';
import * as constants from '../../utils/constant'
import { Icons } from '../../assets';
import { save } from '../../utils/Storage';
const SettingsScreen = ({ navigation }) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const dispatch = useDispatch()
  const [bioSwitch, setBioSwitch] = useState(false);
  const [notificationSwitch, setNotificationSwitch] = useState(false);
  const userDetails = useSelector(state => state?.user?.login)
  const getImage = (values) => {
    if (values === Strings.personalInformation) {
      return Icons.setting_user
    } else if (values === Strings.businessInformation) {
      return Icons.setting_bag
    } else if (values === Strings.users) {
      return Icons.bank_transfer
    } else if (values === Strings.bankLetter) {
      return Icons.bank_transfer
    } else if (values === Strings.transferLimits) {
      return Icons.transfer_limit
    }
  }

  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.settings}
        backButton={true}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              {Strings.accountInformation?.toUpperCase()}
            </Text>
            {settingsAccountInformation?.map((values, index) => {
              const onPress = () => {
                if (values === Strings.personalInformation) {
                  navigation.navigate(navigationStrings.PERSONALINFORMATION);
                } else if (values === Strings.businessInformation) {
                  navigation.navigate(navigationStrings.BUSINESSINFORMATION);
                } else if (values === Strings.users) {
                  navigation.navigate(navigationStrings.USERS);
                } else if (values === Strings.bankLetter) {
                  navigation.navigate(navigationStrings.BANKLETTER);
                } else if (values === Strings.transferLimits) {
                  navigation.navigate(navigationStrings.TRANSFERLIMITS);
                }
              };
              return (
                <>
                  {(userDetails?.data?.accountDetail?.[0]?.customer_type === 'PERSONAL' && index === 0) ? <View key={index} style={{ marginTop: index === 0 ? Platform.OS === "web" ? 12 : horizontalScale(12) : 0 }} >
                    <TouchableOpacity
                      style={styles.navigateButtons}
                      onPress={onPress}
                      key={index}>
                      <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                      }}>
                        <Image source={getImage(values)} style={{
                          height: Platform.OS === "web" ? 20 : horizontalScale(20),
                          width: Platform.OS === "web" ? 20 : horizontalScale(20)
                        }} resizeMode='contain'></Image>
                        <Text style={styles.navigateButtonText}>{values}</Text>
                      </View>
                      <FeatherIcon
                        name={'chevron-right'}
                        size={Platform.OS === "web" ? 18 : moderateScale(18)}
                        color={'#000'}
                      />
                    </TouchableOpacity>
                  </View>
                    :
                    (userDetails?.data?.accountDetail?.[0]?.customer_type !== 'PERSONAL' && index === 1) ?
                      <View key={index} style={{ marginTop: index === 0 ? Platform.OS === "web" ? 12 : horizontalScale(12) : 0 }} >
                        <TouchableOpacity
                          style={styles.navigateButtons}
                          onPress={onPress}
                          key={index}>
                          <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                          }}>
                            <Image source={getImage(values)} style={{
                              height: Platform.OS === "web" ? 20 : horizontalScale(20),
                              width: Platform.OS === "web" ? 20 : horizontalScale(20)
                            }} resizeMode='contain'></Image>
                            <Text style={styles.navigateButtonText}>{values}</Text>
                          </View>
                          <FeatherIcon
                            name={'chevron-right'}
                            size={Platform.OS === "web" ? 18 : moderateScale(18)}
                            color={'#000'}
                          />
                        </TouchableOpacity>
                      </View> :
                      index > 1 &&
                      <View key={index} style={{ marginTop: index === 0 ? Platform.OS === "web" ? 12 : horizontalScale(12) : 0 }} >
                        <TouchableOpacity
                          style={styles.navigateButtons}
                          onPress={onPress}
                          key={index}>
                          <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                          }}>
                            <Image source={getImage(values)} style={{
                              height: Platform.OS === "web" ? 20 : horizontalScale(20),
                              width: Platform.OS === "web" ? 20 : horizontalScale(20)
                            }} resizeMode='contain'></Image>
                            <Text style={styles.navigateButtonText}>{values}</Text>
                          </View>
                          <FeatherIcon
                            name={'chevron-right'}
                            size={Platform.OS === "web" ? 18 : moderateScale(18)}
                            color={'#000'}
                          />
                        </TouchableOpacity>
                      </View>
                  }
                </>
              );
            })}
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              {Strings.settings?.toUpperCase()}
            </Text>
            {settings?.map((values, index) => {
              const isLastValue = index === settings?.length - 1;
              return (
                <View key={index} style={{ marginTop: index === 0 ? Platform.OS === "web" ? 12 : horizontalScale(12) : 0 }}>
                  {userDetails?.data?.businessDetail?.from_database?.business_type === 1 && index === 2 ? <TouchableOpacity
                    style={styles.navigateButtons}
                    key={index}
                    onPress={() => {
                      if (index === 0) {
                        navigation.navigate(navigationStrings.CHANGEPASSWORD);
                      } else if (index === 1) {
                        navigation.navigate(navigationStrings.TESTLINK);
                      } else if (index === 2) {
                        navigation.navigate(navigationStrings.LICENSE)
                      }
                    }}>
                    <View style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                      <Image source={index === 0 ? Icons.change_password : index === 1 ? Icons.disclosure : Icons.license} style={{
                        height: Platform.OS === "web" ? 20 : horizontalScale(20),
                        width: Platform.OS === "web" ? 20 : horizontalScale(20)
                      }} resizeMode='contain'></Image>
                      <Text style={styles.navigateButtonText}>{values}</Text>
                    </View>
                    <FeatherIcon
                      name={'chevron-right'}
                      size={Platform.OS === "web" ? 18 : moderateScale(18)}
                      color={'#000'}
                    />
                  </TouchableOpacity> :
                    <>
                      {index !== 2 && <TouchableOpacity
                        style={styles.navigateButtons}
                        key={index}
                        onPress={() => {
                          if (index === 0) {
                            navigation.navigate(navigationStrings.CHANGEPASSWORD);
                          } else if (index === 1) {
                            navigation.navigate(navigationStrings.TESTLINK);
                          } else if (index === 2) {
                            navigation.navigate(navigationStrings.LICENSE)
                          }
                        }}>
                        <View style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                          <Image source={index === 0 ? Icons.change_password : index === 1 ? Icons.disclosure : Icons.license} style={{
                            height: Platform.OS === "web" ? 20 : horizontalScale(20),
                            width: Platform.OS === "web" ? 20 : horizontalScale(20)
                          }} resizeMode='contain'></Image>
                          <Text style={styles.navigateButtonText}>{values}</Text>
                        </View>
                        <FeatherIcon
                          name={'chevron-right'}
                          size={Platform.OS === "web" ? 18 : moderateScale(18)}
                          color={'#000'}
                        />
                      </TouchableOpacity>}
                    </>
                  }
                </View>
              );
            })}
          </View>
        </ScrollView>
        <CustomButton
          theme={theme}
          buttonTitle={Strings.logout}
          buttonTitleStyle={styles.logout}
          buttonStyle={styles.logoutButton}
          onBtnPress={() => {
            Alert.alert(
              'ReThinkfi',
              "Are you sure,you want to logout!",
              [{
                text: 'OK', onPress: async () => {
                  AsyncStorage.removeItem(constants.LOGIN_TOKEN)
                  await save('otpVerify', false)
                  navigation.navigate(navigationStrings.AUTHSTACK)
                }
              },
              { text: 'Cancel', onPress: () => console.log('OK Pressed') }],
              { cancelable: true },
            );
          }}
        />
        {/* <Text style={styles.version}>{`${Strings.version} - 1.0`}</Text> */}
      </View>
    </View>
  );
};

export default SettingsScreen;
