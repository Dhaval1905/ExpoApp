import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import { CustomHeader } from '../../components';
import { navigationStrings, personalInformation, Strings } from '../../constants';
import { moderateScale } from '../../theme';
import styling from './PersonalInformationStyle';

const PersonalInformationScreen = ({ navigation }) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const userDetails = useSelector(state => state?.user?.login)
  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.personalInformation}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.card}>
          {personalInformation?.map((values, index) => {
            const isLastValue = index === personalInformation?.length - 1;
            const isFirstValue = index === 0;
            const getIcon = () => {
              if (values === 'NAME') {
                return 'user';
              } else if (values === 'EMAIL') {
                return 'mail';
              } else if (values === 'MOBILE PHONE') {
                return 'smartphone';
              } else if (values === 'HOME ADDRESS') {
                return 'home';
              }
            };
            const getInfo = () => {
              if (values === 'NAME') {
                return userDetails?.data?.personDetail?.[0]?.first_name + ' ' + userDetails?.data?.personDetail?.[0]?.last_name;
              } else if (values === 'EMAIL') {
                return userDetails?.data?.personDetail?.[0]?.email;
              } else if (values === 'MOBILE PHONE') {
                return userDetails?.data?.personDetail?.[0]?.phone_number;
              } else if (values === 'HOME ADDRESS') {
                return userDetails?.data?.personDetail?.[0]?.legal_address?.address_line_1 + ',' + userDetails?.data?.personDetail?.[0]?.legal_address?.city + ',' + userDetails?.data?.personDetail?.[0]?.legal_address?.country_code + ',' + userDetails?.data?.personDetail?.[0]?.legal_address?.postal_code;
              }
            };
            const onPress = () => {
              if (values === 'EMAIL') {
                navigation.navigate(navigationStrings.EDITEMAIL);
              } else if (values === 'MOBILE PHONE') {
                navigation.navigate(navigationStrings.EDITMOBILEPHONE);
              } else if (values === 'HOME ADDRESS') {
                navigation.navigate(navigationStrings.EDITHOMEADDRESS);
              }
            };
            return (
              <View key={index}>
                <TouchableOpacity
                  disabled={isFirstValue}
                  style={styles.navigateButtons}
                  onPress={onPress}
                  key={index}>
                  <View style={styles.details}>
                    <Text style={styles.navigateButtonTitle}>{values}</Text>
                    <Text style={styles.navigateButtonSubtitle}>
                      {getInfo()}
                    </Text>
                  </View>
                  {isFirstValue && <View style={styles.imageParent}>
                    <FeatherIcon name={getIcon()} size={moderateScale(30)} color={'#000'}/>
                  </View>}
                  {!isFirstValue ? (
                    <FeatherIcon
                      name={'chevron-right'}
                      size={moderateScale(18)}
                      color={'#000'}
                    />
                  ) : (
                    <></>
                  )}
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default PersonalInformationScreen;
