import { Platform, StyleSheet } from 'react-native';
import { Fonts } from '../../../../assets';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../theme';

const styling = theme =>
  StyleSheet.create({
    card: {
      width: Platform.OS === "web" ? "100%" : '100%',
      backgroundColor: Colors[theme].white,
      marginVertical: verticalScale(10),
      borderRadius: Platform.OS === "web" ? 15 : moderateScale(24),
      paddingHorizontal: Platform.OS === "web" ? 15 : horizontalScale(12),
      overflow: 'hidden',
      elevation: 4
    },
    cardHeader: {
      width: '100%',
      height: Platform.OS === "web" ? 25 : verticalScale(60),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: Platform.OS === "web" ? 10 : moderateScale(5),
      marginBottom: Platform.OS === "web" ? 3 : 0
    },
    headerTitle: {
      color: Colors[theme].black,
      fontSize: Platform.OS === "web" ? 12 : moderateScale(18),
      fontFamily: Fonts.bold,
      marginLeft: Platform.OS === "web" ? 8 : moderateScale(15)
    },
    divider: {
      borderWidth: 0.9,
      borderStyle: 'dashed',
    },
    balanceDetailParent: {
      height: verticalScale(90),
      width: '100%',
      flexDirection: 'row',
      // marginTop: Platform.OS === "web" ? 5 : moderateScale(5)
    },
    balanceDetail: {
      flex: 0.6,
      marginTop: verticalScale(12)
      // justifyContent: 'space-evenly',
    },
    balanceDetailNumbers: {
      flex: 0.4,
      // justifyContent: 'space-evenly',
      marginTop: verticalScale(12),
      alignItems: 'flex-end',
    },
    availableParent: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    availableBalance: {
      color: Colors[theme].black,
      fontSize: Platform.OS === "web" ? 12 : moderateScale(16),
      fontFamily: Fonts.medium,
      marginRight: horizontalScale(4),
    },
    availableBalanceNumber: {
      color: Colors[theme].emerald,
      fontSize: Platform.OS === "web" ? 14 : moderateScale(18),
      fontFamily: Fonts.medium,
      // fontWeight:'700'
    },
    balanceDetailText: {
      color: Colors[theme].grey700,
      fontSize: Platform.OS === "web" ? 12 : moderateScale(14),
      fontFamily: Fonts.regular,
    },
    overallBalanceParent: {
      height: verticalScale(60),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    overallBalanceText: {
      fontSize: moderateScale(16),
      color: Colors[theme].black,
      fontFamily: Fonts.bold,
    },
    overallBalanceNumber: {
      fontSize: moderateScale(16),
      color: Colors[theme].emerald,
      fontFamily: Fonts.bold,
    },
    monthDetailParent: {
      height: verticalScale(80),
      marginTop: verticalScale(15),
      borderRadius: moderateScale(10),
    },
    monthTextParent: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors[theme].blue20,
      width: Platform.OS === "web" ? 85 : horizontalScale(85),
      height: Platform.OS === "web" ? 35 : horizontalScale(35),
      alignSelf: 'center',
      borderRadius: horizontalScale(50)
    },
    monthName: {
      color: Colors[theme].black,
      fontSize: Platform.OS === "web" ? 12 : moderateScale(14),
      fontFamily: Fonts.medium,
    },
    monthDetailDivider: {
      backgroundColor: Colors[theme].grey400,
      width: '100%',
      height: verticalScale(2),
    },
    moneyInOutParent: {
      flex: 0.65,
      flexDirection: 'row',
    },
    moneyInParent: {
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    moneyOutParent: {
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    moneyDetailText: {
      color: Colors[theme].black,
      fontFamily: Fonts.regular,
    },
    moneyInNumber: {
      fontSize: Platform.OS === "web" ? 14 : moderateScale(16),
      color: Colors[theme].emerald,
      fontFamily: Fonts.medium,
    },
    moneyOutNumber: {
      fontSize: Platform.OS === "web" ? 14 : moderateScale(16),
      color: Colors[theme].black,
      fontFamily: Fonts.medium,
    },
    iconStyle: {
      height: Platform.OS === "web" ? 20 : horizontalScale(25),
      width: Platform.OS === "web" ? 20 : horizontalScale(25),
      resizeMode: 'contain'
    }
  });

export default styling;
