import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { Strings } from '../../../constants/Strings';
import { Colors, moderateScale, verticalScale } from '../../../theme';
import styling from './styles/BalancesCardStyle';
import { Images } from '../../../assets';
const date = new Date();
const month = date.toLocaleString('default', { month: 'long' });

const BalancesCard = ({
  currencySymbol = '$',
  availableBalance,
  reserves,
  reservesHoldings,
  pending,
  overallBalance,
  monthName,
  moneyIn,
  moneyOut,
  theme,
}) => {
  const styles = styling(theme);

  const [isCardOpen, setIsCardOpen] = useState(false);
  const dashBoardData = useSelector(state => state?.user?.dashBoard)
  return (
    <View style={[styles.card, !isCardOpen && { height: Platform.OS === "web" ? 90 : verticalScale(150) }]}>
      <View style={styles.cardHeader}>
        <View style={{ flexDirection: 'row' }} >
          <Image source={Images.balances_Icon} style={styles.iconStyle} />
          <Text style={styles.headerTitle}>{Strings.balances}</Text>
        </View>
        <TouchableOpacity onPress={() => setIsCardOpen(!isCardOpen)}>
          <Icon
            name={isCardOpen ? 'chevron-up' : 'chevron-down'}
            size={Platform.OS === "web" ? 20 : moderateScale(30)}
            color={Colors[theme]?.black}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <View style={styles.balanceDetailParent}>
        <View style={styles.balanceDetail}>
          <View style={styles.availableParent}>
            <Text style={styles.availableBalance}>
              {Strings.availableBalance}
            </Text>
            {/* <TouchableOpacity onPress={() => { }}>
              <Icon
                name="md-information-circle-outline"
                size={moderateScale(28)}
                color={Colors[theme]?.blue}
              />
            </TouchableOpacity> */}
          </View>
          <Text style={styles.balanceDetailText}>{Strings.pending}</Text>
        </View>
        <View style={styles.balanceDetailNumbers}>
          <Text style={styles.availableBalanceNumber}>{`${dashBoardData?.balances?.available_balance?.text ?? '$0.00'
            }`}</Text>
          <Text style={styles.balanceDetailText}>{`${dashBoardData?.balances?.pending_balance?.text ?? '$0.00'
            }`}</Text>
        </View>
      </View>
      <View style={styles.monthTextParent}>
        <Text style={styles.monthName}>{monthName ?? month}</Text>
      </View>
      <View style={styles.monthDetailParent}>
        <View style={styles.moneyInOutParent}>
          <View style={[styles.moneyInParent, { borderRightWidth: 0.4, borderColor: "#C0C0C0" }]}>
            <Text style={styles.moneyDetailText}>{Strings.moneyIn}</Text>
            <Text style={styles.moneyInNumber}>{`${dashBoardData?.money?.in ?? '$0.00'
              }`}</Text>
          </View>
          <View style={styles.moneyOutParent}>
            <Text style={styles.moneyDetailText}>{Strings.moneyOut}</Text>
            <Text style={styles.moneyOutNumber}>{`${dashBoardData?.money?.out ?? '$0.00'
              }`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BalancesCard;
