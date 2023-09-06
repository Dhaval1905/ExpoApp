import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { CustomHeader } from '../../components';
import { navigationStrings, businessInformation, Strings } from '../../constants';
import { moderateScale } from '../../theme';
import styling from './BusinessInformationStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';

const BusinessInformationScreen = ({ navigation }) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const userDetails = useSelector(state => state?.user?.login)
  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.businessInformation}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.card}>
          {businessInformation?.map((values, index) => {
            const isLastValue = index === businessInformation?.length - 1;
            const isFirstValue = index === 0;
            const getIcon = () => {
              if (values === 'LEGAL BUSINESS NAME') {
                return 'user';
              } else if (values === 'DBA') {
                return 'briefcase';
              } else if (values === 'PHONE') {
                return 'smartphone';
              } else if (values === 'BUSINESS ADDRESS') {
                return 'office-building-marker-outline';
              } else if (values === 'MAILING ADDRESS') {
                return 'mailbox';
              }
            };
            const getInfo = () => {
              if (values === 'LEGAL BUSINESS NAME') {
                return userDetails?.data?.businessDetail?.entity_name;
              } else if (values === 'DBA') {
                return 'briefcase';
              } else if (values === 'PHONE') {
                return userDetails?.data?.businessDetail?.phone_number;
              } else if (values === 'BUSINESS ADDRESS') {
                return userDetails?.data?.businessDetail?.legal_address?.address_line_1 + ',' + userDetails?.data?.businessDetail?.legal_address?.city + ',' + userDetails?.data?.businessDetail?.legal_address?.country_code + ',' + userDetails?.data?.businessDetail?.legal_address?.postal_code;
              } else if (values === 'MAILING ADDRESS') {
                return userDetails?.data?.businessDetail?.email;
              }
            };
            const onPress = () => {
              if (values === 'DBA') {
                navigation.navigate(navigationStrings.DBA);
              } else if (values === 'PHONE') {
                navigation.navigate(navigationStrings.EDITBUSINESSPHONE);
              } else if (values === 'BUSINESS ADDRESS') {
                navigation.navigate(navigationStrings.EDITBUSINESSADDRESS);
              } else if (values === 'MAILING ADDRESS') {
                navigation.navigate(navigationStrings.EDITMAILINGADDRESS);
              }
            };
            return (
              <View key={index}>
                <TouchableOpacity
                  disabled={isFirstValue}
                  style={styles.navigateButtons}
                  onPress={onPress}>
                  <View style={styles.details}>
                    <Text style={styles.navigateButtonTitle}>{values}</Text>
                    <Text style={styles.navigateButtonSubtitle}>
                      {getInfo()}
                    </Text>
                  </View>
                  
                     {isFirstValue && 
                  <View style={styles.imageParent}>
                  <FeatherIcon name={getIcon()} size={moderateScale(30)} color={'#000'} />
                  </View>
                  }
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
                {/* {!isLastValue ? <View style={styles.divider} /> : <></>} */}
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default BusinessInformationScreen;
