import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { Icons } from '../../assets';
import { CustomButton, CustomHeader, MoveMoneyCard } from '../../components';
import { navigationStrings } from '../../constants';
import { Strings } from '../../constants/Strings';
import { Colors } from '../../theme';
import styling from './DepositCheckStyle';
import { MoveMoneyCheck } from '../../components/MoveMoneyCheck';

const DepositCheckScreen = ({ navigation }) => {
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
        <MoveMoneyCheck
          theme={theme}
          title={Strings.depositeCheckFromPhone}
          subTitle={Strings.depositBusinessDayOneFour}
          icon={Icons.money}
          tagOne={Strings.forLargeDeposits}
          tagTwo={Strings.free}
          tagOneTextStyle={styles.greyText}
          tagOneBackground={Colors[theme]?.grey200}
          tagTwoTextStyle={styles.darkGreenText}
          tagTwoBackground={Colors[theme]?.green10050}
          rightIcon={false}
        />
        {/* <View style={styles.divider} />
        <View style={styles.descriptionParent}>
          <Text style={styles.descriptionTitle}>
            {Strings.easyWayLargeDeposits}
          </Text>
          <Text style={styles.descriptionSubtitle}>
            {Strings.depositCheckLimit}
          </Text>
        </View> */}
      </View>
      <View style={styles.verifyParent}>
        <CustomButton
          theme={theme}
          buttonTitle={Strings.verifyIdentity}
          buttonTitleStyle={styles.verifyIdentity}
          buttonStyle={styles.verifyButtonStyle}
          onBtnPress={() =>
            navigation.navigate(navigationStrings.VERIFYIDENTITY)
          }
        />
      </View>
    </View>
  );
};

export default DepositCheckScreen;
