import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {Icons} from '../../assets';
import {CustomButton, CustomHeader} from '../../components';
import {navigationStrings, Strings} from '../../constants';
import styling from './MakePaymentStyle';

const MakePaymentScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.makePayment}
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.container}>
        <Text style={styles.makePayment}>{Strings.makePayment}</Text>
        <Image source={Icons.user} style={styles.userLogo} />
        <Text style={styles.title}>{Strings.addPayeesToSendPayments}</Text>
        <Text style={styles.subTitle}>{Strings.sendMoneyPayeesBank}</Text>
      </View>
      <View style={styles.addPayeeParent}>
        <CustomButton
          theme={theme}
          buttonTitle={Strings.addPayee}
          buttonStyle={styles.addPayeeButton}
          buttonTitleStyle={styles.addPayee}
          onBtnPress={() => navigation.navigate(navigationStrings.ADDPAYEE)}
        />
      </View>
    </View>
  );
};

export default MakePaymentScreen;
