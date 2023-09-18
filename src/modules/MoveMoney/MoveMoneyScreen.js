import { useRoute } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, Platform, ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Icons } from '../../assets';
import { MoveMoneyCard } from '../../components';
import { navigationStrings } from '../../constants';
import { Strings } from '../../constants/Strings';
import { Colors, horizontalScale } from '../../theme';
import styling from './MoveMoneyStyle';
import images from '../../assets/images';

const MoveMoneyScreen = ({ navigation }) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  console.log('---isMoveMoney', route?.params)
  const styles = styling(theme);
  const userDetails = useSelector(state => state?.user?.login)
  const dashBoardData = useSelector(state => state?.user?.dashBoard)
  const isDashboard = useSelector(state => state?.initial?.isDashboard)
  return (
    <View style={styles.screen}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} >
        <ImageBackground source={images.backgroudImage} style={{ backgroundColor: '#000' }} resizeMode='cover' >
          <View style={styles.balanceParent}>
            <Text style={[styles.availableNow, { color: '#94B1FF' }]}>{"Balance"}</Text>
            <Text style={styles.balance}>{dashBoardData?.balances?.available_balance?.text}</Text>
            <Text style={styles.availableNow}>{Strings.availableNow}</Text>
          </View>
          <View style={{ width: '100%', paddingHorizontal: Platform.OS === "web" ? 14 : horizontalScale(14), backgroundColor: Colors[theme].screenBackground, borderTopRightRadius: Platform.OS === "web" ? 24 : horizontalScale(24), borderTopLeftRadius: Platform.OS === "web" ? 24 : horizontalScale(24), marginTop: Platform.OS === "web" ? 20 : horizontalScale(20) }}>
            {
              isDashboard ? null :
                <MoveMoneyCard
                  theme={theme}
                  title={Strings.makePayment}
                  subTitle={Strings.sendMoneyToPayees}
                  icon={Icons.make_payment}
                  onPressCard={() => navigation.navigate(navigationStrings.ADDPAYEE)}
                  viewBackground='#F9EFFF'
                />
            }
            <MoveMoneyCard
              theme={theme}
              title={"Fund Account"}
              subTitle={"Fund money into your RethinkFi account"}
              icon={Icons.credit_card}
              onPressCard={() => navigation.navigate(navigationStrings.FUNDACCOUNTLIST)}
              viewBackground='#F9FEDA'
            />
            <MoveMoneyCard
              theme={theme}
              title={Strings.pushFundAnotherBank}
              subTitle={Strings.depositBusinessDayOneTwo}
              icon={Icons.bank_transfer}
              tagOne={Strings.forLargeDeposits}
              tagTwo={Strings.fast}
              tagOneTextStyle={styles.greyText}
              tagOneBackground={Colors[theme]?.grey200}
              tagTwoTextStyle={styles.darkBlueText}
              tagTwoBackground={Colors[theme]?.blue10050}
              onPressCard={() => navigation.navigate(navigationStrings.PUSHFUND, { isFromAddAccount: false })}
              viewBackground='#DFF7FF'
            />
            <MoveMoneyCard
              theme={theme}
              title={Strings.depositCheck}
              subTitle={Strings.depositBusinessDayOneFour}
              icon={Icons.deposit_check}
              tagOne={Strings.forLargeDeposits}
              tagOneTextStyle={styles.greyText}
              tagOneBackground={Colors[theme]?.grey200}
              onPressCard={() => navigation.navigate(navigationStrings.MAKEDEPOSIT)}
              viewBackground='#FFE8EC'
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default MoveMoneyScreen;
