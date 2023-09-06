import {StyleSheet} from 'react-native';
import {Fonts} from '../../assets';
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
      paddingRight: horizontalScale(15),
      alignItems: 'center',
    },
    container: {
      flex: 1,
      paddingHorizontal: horizontalScale(12),
    },
    virtualCard: {
      // flexDirection: 'row',
      marginTop: verticalScale(20),
      // height: verticalScale(250),
      borderRadius: moderateScale(24),
      // padding: moderateScale(10),
      justifyContent: 'space-between',
    },
    appLogo: {
      width: moderateScale(200),
      height: moderateScale(50),
    },
    cardName: {
      fontFamily: Fonts.regular,
      color: 'white',
    },
    cardNumber: {
      fontFamily: Fonts.medium,
      color: '#000',
      fontSize:horizontalScale(17),
      marginVertical:horizontalScale(5)
    },
    cardStateParent: {
      backgroundColor: Colors[theme]?.emerald,
      padding: moderateScale(4),
    },
    cardState: {
      color: 'white',
      fontFamily: Fonts.regular,
      fontSize: moderateScale(10),
    },
    rightSide: {
      alignItems: 'flex-end',
      alignSelf:'flex-end'
    },
    cardType: {
      color: 'white',
      marginTop: verticalScale(80),
    },
    masterCard: {
      height: verticalScale(50),
      width: horizontalScale(50),
      alignSelf:'flex-end',
      marginRight:horizontalScale(25)
      // marginTop: verticalScale(30),
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: verticalScale(15),
    },
    card: {
      flexDirection: 'row',
      backgroundColor: Colors[theme]?.blue,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderRadius: moderateScale(40),
      padding: moderateScale(12),
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
      fontSize: moderateScale(16),
    },
    noTransaction: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: verticalScale(80),
    },
    noVirtualCardTransaction: {
      color: Colors[theme]?.black,
      fontFamily: Fonts.regular,
      textAlign: 'center',
      lineHeight: verticalScale(25),
    },
    freezCard1: {
      fontSize:horizontalScale(12),
      marginTop:10,
      fontFamily:Fonts.regular
    },
    cardHolder:{
      fontSize:horizontalScale(11),
      fontFamily:Fonts.regular,
      color:'#8A8A8A'
    }
  });

export default styling;
