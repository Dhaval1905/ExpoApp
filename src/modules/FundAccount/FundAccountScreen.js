import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { Icons } from '../../assets';
import { CustomButton, CustomHeader, MoveMoneyCard } from '../../components';
import { Strings } from '../../constants/Strings';
import { Colors } from '../../theme';
import styling from './FundAccountStyle';

const FundAccountScreen = ({ navigation }) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.fundAccount}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.card}>
        <MoveMoneyCard
          theme={theme}
          title={Strings.fundConnectedBank}
          subTitle={Strings.depositBusinessDayOneTwo}
          icon={Icons.money}
          tagOne={Strings.free}
          tagTwo={Strings.forSmallDeposits}
          tagOneTextStyle={styles.darkGreenText}
          tagOneBackground={Colors[theme]?.green10050}
          tagTwoTextStyle={styles.greyText}
          tagTwoBackground={Colors[theme]?.grey200}
          rightIcon={false}
        />
        <View style={styles.divider} />
        <Text style={styles.descriptionTitle}>{Strings.seamlessDeposits}</Text>
        <Text style={styles.descriptionSubtitle}>
          {Strings.connectExternalBankAccount}
        </Text>
      </View>
      <View style={styles.addExternalAccountButtonParent}>
        <CustomButton
          theme={theme}
          buttonTitle={Strings.addExternalAccount}
          buttonTitleStyle={styles.addExternalAccount}
          buttonStyle={styles.addExternalAccountButtonStyle}
        />
      </View>
    </View>
  );
};

export default FundAccountScreen;
