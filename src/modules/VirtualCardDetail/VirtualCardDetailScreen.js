import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import { Icons } from '../../assets';
import { CustomHeader } from '../../components';
import { Strings } from '../../constants';
import { Colors, moderateScale, verticalScale } from '../../theme';
import styling from './VirtualCardDetailStyle';

const VirtualCardScreen = ({ navigation }) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const card = useSelector(state => state?.user?.getCard)
  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.virtualCardDetails}
        onPressBack={() => navigation.goBack()}
      />
      <View>
        <LinearGradient
          start={{ x: 0.5, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#FFBF00', '#FBCEB1']}
          style={styles.virtualCard}>
          <View style={styles.leftSide}>
            <Image source={Icons.appLogo} style={styles.appLogo} />
            <Text style={styles.cardNumber}>{`5313 6790 1804 ${card?.[0]?.last_four}`}</Text>
            <Text
              style={[styles.cardDetailTitle, { marginTop: verticalScale(40) }]}>
              {Strings.validThru?.toUpperCase()}
            </Text>
            <Text style={styles.cardDetailValue}>{card?.[0]?.expiration_month}/ {card?.[0]?.expiration_year}</Text>
            <Text
              style={[styles.cardDetailTitle, { marginTop: verticalScale(10) }]}>
              {Strings.cvv?.toUpperCase()}
            </Text>
            <Text style={styles.cardDetailValue}>914</Text>
          </View>
          <View style={styles.rightSide}>
            <Text style={styles.cardType}>{Strings.debit}</Text>
            <Image source={Icons.masterCard} style={styles.masterCard} />
          </View>
        </LinearGradient>
        <View style={[styles.card, { paddingBottom: verticalScale(10) }]}>
          <View style={styles.cardItem}>
            <Text style={styles.cardItemTitle}>
              {Strings.cardholderName?.toUpperCase()}
            </Text>
            <Text style={styles.cardItemValue}>{'Card Holder'}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItem}>
            <Text style={styles.cardItemTitle}>
              {Strings.billingAddress?.toUpperCase()}
            </Text>
            <Text style={styles.cardItemValue}>{'Address Here'}</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.descriptionTitle}>{Strings.addFundsCard}</Text>
          <Text style={styles.descriptionSubtitle}>
            {Strings.copyPasteCard}
          </Text>
          <TouchableOpacity style={styles.socialCard}>
            <View style={styles.socialIconParent}>
              <Image source={Icons.venmo} style={styles.socialIcon} />
            </View>
            <View style={styles.socialNameParent}>
              <Text style={styles.appTitle}>{Strings.venmo}</Text>
              <Text style={styles.goToApp}>{Strings.goToApp}</Text>
            </View>
            <View style={styles.rightIcon}>
              <Icon
                name={'chevron-right'}
                size={moderateScale(24)}
                color={Colors[theme]?.grey400}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.socialCard}>
            <View style={styles.socialIconParent}>
              <Image source={Icons.paypal} style={styles.socialIcon} />
            </View>
            <View style={styles.socialNameParent}>
              <Text style={styles.appTitle}>{Strings.paypal}</Text>
              <Text style={styles.goToApp}>{Strings.goToApp}</Text>
            </View>
            <View style={styles.rightIcon}>
              <Icon
                name={'chevron-right'}
                size={moderateScale(24)}
                color={Colors[theme]?.grey400}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default VirtualCardScreen;
