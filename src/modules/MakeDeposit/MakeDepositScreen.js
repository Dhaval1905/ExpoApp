import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {Icons} from '../../assets';
import {CustomButton, CustomHeader, MoveMoneyCard} from '../../components';
import {navigationStrings} from '../../constants';
import {Strings} from '../../constants/Strings';
import {Colors} from '../../theme';
import styling from './MakeDepositStyle';
import { MoveMoneyCheck } from '../../components/MoveMoneyCheck';

const MakeDeposit = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.makeDeposit}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.card}>
        <MoveMoneyCheck
          theme={theme}
          title={Strings.depositCheck}
          subTitle={Strings.depositBusinessDayOneFour}
          icon={Icons.deposit_check}
          tagOne={Strings.forLargeDeposits}
          tagOneTextStyle={styles.greyText}
          tagOneBackground={Colors[theme]?.grey200}
          rightIcon={false}
          viewBackground={'#FFE8EC'}
        text1={"An easy way to make large deposit to your account"}
        text2={"Deposit check through the Rethink mobile app (up to $20,000 a day)"}
        />
      </View> 
      <View style={styles.verifyParent}>
        <CustomButton
          theme={theme}
          buttonTitle={Strings.depositCheck}
          buttonTitleStyle={styles.verifyIdentity}
          buttonStyle={styles.verifyButtonStyle}
          onBtnPress={() => navigation.navigate(navigationStrings.SIGNENDORSE)}
        />
      </View>
    </View>
  );
};

export default MakeDeposit;
