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
    headerParent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingRight: Platform.OS === 'web' ? 15 : horizontalScale(15),
      alignItems: 'center',
    },
    container: {
      flex: 1,
      paddingHorizontal: Platform.OS === 'web' ? 12 : horizontalScale(12),
    },
    virtualCard: {
      // flexDirection: 'row',
      marginTop: Platform.OS === 'web' ? 20 : verticalScale(20),
      // height: verticalScale(250),
      borderRadius: Platform.OS === 'web' ? 24 : moderateScale(24),
      // padding: moderateScale(10),
      justifyContent: 'space-between',
    },
    appLogo: {
      width: Platform.OS === 'web' ? 200 : moderateScale(200),
      height: Platform.OS === 'web' ? 50 : moderateScale(50),
    },
    cardName: {
      fontFamily: Fonts.regular,
      color: 'white',
    },
    cardNumber: {
      fontFamily: Fonts.medium,
      color: '#000',
      fontSize: Platform.OS === 'web' ? 17 : horizontalScale(17),
      marginVertical: Platform.OS === 'web' ? 5 : horizontalScale(5)
    },
    cardStateParent: {
      backgroundColor: Colors[theme]?.emerald,
      padding: Platform.OS === 'web' ? 4 : moderateScale(4),
    },
    cardState: {
      color: 'white',
      fontFamily: Fonts.regular,
      fontSize: Platform.OS === 'web' ? 10 : moderateScale(10),
    },
    rightSide: {
      alignItems: 'flex-end',
      alignSelf: 'flex-end'
    },
    cardType: {
      color: 'white',
      marginTop: Platform.OS === 'web' ? 80 : verticalScale(80),
    },
    masterCard: {
      height: Platform.OS === 'web' ? 50 : verticalScale(50),
      width: Platform.OS === 'web' ? 50 : horizontalScale(50),
      alignSelf: 'flex-end',
      marginRight: Platform.OS === 'web' ? 25 : horizontalScale(25)
      // marginTop: verticalScale(30),
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: Platform.OS === 'web' ? 15 : verticalScale(15),
    },
    card: {
      flexDirection: 'row',
      backgroundColor: Colors[theme]?.blue,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderRadius: Platform.OS === 'web' ? 40 : moderateScale(40),
      padding: Platform.OS === 'web' ? 12 : moderateScale(12),
    },
    freezCard: {
      color: Colors[theme]?.white,
      fontFamily: Fonts.medium,
    },
    cardDetails: {
      color: Colors[theme]?.white,
      fontFamily: Fonts.medium
    },
    addFundsCard: {
      fontFamily: Fonts.regular,
      color: Colors[theme]?.black,
      fontSize: Platform.OS === 'web' ? 16 : moderateScale(16),
    },
    noTransaction: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: Platform.OS === 'web' ? 80 : verticalScale(80),
    },
    noVirtualCardTransaction: {
      color: Colors[theme]?.black,
      fontFamily: Fonts.regular,
      textAlign: 'center',
      lineHeight: Platform.OS === 'web' ? 25 : verticalScale(25),
    },
    freezCard1: {
      fontSize: Platform.OS === 'web' ? 12 : horizontalScale(12),
      marginTop: 10,
      fontFamily: Fonts.regular
    },
    cardHolder: {
      fontSize: Platform.OS === 'web' ? 11 : horizontalScale(11),
      fontFamily: Fonts.regular,
      color: '#8A8A8A'
    }
  });

export default styling;
