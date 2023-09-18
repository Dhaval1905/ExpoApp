import { Platform, StyleSheet } from 'react-native';
import { Fonts } from '../../assets';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styling = theme =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: Colors[theme]?.screenBackground,
    },
    header: {
      height: Platform.OS === "web" ? 20 : verticalScale(50),
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingHorizontal: Platform.OS === "web" ? 20 : horizontalScale(20),
    },
    usernameParent: {
      // justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginLeft: Platform.OS === "web" ? 16 : horizontalScale(16)
    },
    usernameT: {
      color: "#808080",
      fontFamily: Fonts.regular,
      fontSize: Platform.OS === "web" ? 12 : moderateScale(12),
    },
    usernameS: {
      color: Colors[theme].black,
      fontFamily: Fonts.medium,
      fontSize: Platform.OS === "web" ? 16 : moderateScale(16),
    },
    routingAccountNumberParent: {
      flexDirection: 'row',
      marginVertical: Platform.OS === "web" ? 20 : verticalScale(20),
      marginBottom: Platform.OS === "web" ? 20 : verticalScale(20),
      marginHorizontal: Platform.OS === "web" ? 16 : horizontalScale(16),
      backgroundColor: Colors[theme].white,
      elevation: 2,
      borderRadius: Platform.OS === "web" ? 24 : horizontalScale(24),
      padding: Platform.OS === "web" ? 14 : horizontalScale(14),
      justifyContent: 'space-evenly'
    },
    routingNumberParent: {
      // flex: 0.5,
      borderLeftWidth: 0.2,
      paddingLeft: Platform.OS === "web" ? 15 : horizontalScale(15)
    },
    accountNumberParent: {
      // flex: 0.8,
      alignItems: 'center',
      flexDirection: 'row'
    },
    subTitleParent: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: Platform.OS === "web" ? 4 : verticalScale(4),
    },
    subTitle: {
      marginRight: Platform.OS === "web" ? 3 : horizontalScale(3),
      fontFamily: Fonts.bold,
      color: Colors[theme]?.black,
      fontSize: 13
    },
    routingNumber: {
      color: Colors[theme]?.grey700,
      fontFamily: Fonts.regular,
    },
    accountNumber: {
      color: Colors[theme]?.grey700,
      fontFamily: Fonts.regular,
    },
    cardParent: {
      flexDirection: 'row',
      height: Platform.OS === "web" ? 110 : verticalScale(220),
      paddingHorizontal: Platform.OS === "web" ? 8 : horizontalScale(14)
    },
    card: {
      flex: 0.5,
      borderRadius: Platform.OS === "web" ? 24 : moderateScale(24),
      margin: Platform.OS === "web" ? 8 : moderateScale(8),
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardTitle: {
      color: Colors[theme].black,
      fontFamily: Fonts.medium,
      fontSize: Platform.OS === "web" ? 15 : moderateScale(15),
      marginVertical: Platform.OS === "web" ? 10 : verticalScale(10),
      marginTop: Platform.OS === "web" ? 10 : moderateScale(30)
    },
    referParent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: Colors[theme].white,
      padding: Platform.OS === "web" ? 15 : moderateScale(15),
      marginHorizontal: Platform.OS === "web" ? 10 : horizontalScale(10),
      borderRadius: Platform.OS === "web" ? 10 : moderateScale(10),
      marginVertical: Platform.OS === "web" ? 10 : verticalScale(10),
    },
    referBusiness: {
      fontFamily: Fonts.bold,
      color: Colors[theme].blue,
      fontSize: Platform.OS === "web" ? 16 : moderateScale(16),
    },
    detailText: {
      color: Colors[theme].white,
      fontSize: Platform.OS === "web" ? 20 : moderateScale(20),
      fontFamily: Fonts.medium,
    },
  });

export default styling;
