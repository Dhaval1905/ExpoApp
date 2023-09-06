import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ImageBackground, ScrollView, Text, View, Image } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { Icons, Images } from '../../assets';
import { DashboardCard } from '../../components';
import { navigationStrings, Strings } from '../../constants';
import { getDashBoard, getLicenseDetails, getTransaction1 } from '../../redux/actions/tansaction';
import { showLoader } from '../../redux/actions/user';
import { Colors } from '../../theme';
import { ActivationCard, BalancesCard, TransactionCard } from './components';
import styling from './DashboardStyle';
import DashboardHeader from './components/DashboardHeader';
import { changeDashboard } from '../../redux/actions/initial';


const DashboardScreen = ({ navigation }) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const userDetails = useSelector(state => state?.user?.login)
  const dashBoardData = useSelector(state => state?.user?.dashBoard)

  useEffect(() => {
    (async () => {
      const unsubscribe = navigation.addListener('focus', async () => {
        await dispatch(showLoader(true))
        await dispatch(getDashBoard())
        await dispatch(getLicenseDetails())
        await dispatch(showLoader(false))
        await dispatch(changeDashboard(false))
      });
      return unsubscribe;
    })();
  }, [])

  const onPress = async () => {
    await dispatch(changeDashboard(true))
    navigation.navigate(navigationStrings.MOVEMONEY, { isMoveMoney: false })
  }

  return (
    <View style={styles.screen}>
      <ScrollView style={{ flex: 1 }}>
        <DashboardHeader theme={theme} navigation={navigation} />
        <View style={styles.backgroundImageParent}>
          <View style={styles.balanceCardParent}>
            <BalancesCard theme={theme} availableBalance={userDetails?.data?.accountDetail?.[0]?.balances?.[1]?.balance} overallBalance={userDetails?.data?.accountDetail?.[0]?.balances?.[0]?.balance} />
          </View>
        </View>
        <View style={styles.cardParent}>
          <DashboardCard
            theme={theme}
            title={Strings.fundAccount}
            subTitle={Strings.addMoneyRethink}
            navigationText={Strings.wayFund}
            logo={Icons.bank}
            logoStyle={styles.logoStyle}
            onPressNavigationButton={() => onPress()}
          // onPressNavigationButton={() => navigation.navigate(navigationStrings.MOVEMONEY,{isMoveMoney:false})}
          />
          <TransactionCard theme={theme} noTrasaction={(dashBoardData?.last_5_transactions_filtered && dashBoardData?.last_5_transactions_filtered.length > 0) ? false : true} title={'Last 5 Transactions'} />
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;
