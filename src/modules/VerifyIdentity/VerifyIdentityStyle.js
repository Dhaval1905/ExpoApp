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
      backgroundColor: Colors[theme].white,
    },
    container: {
      flex: 1,
      paddingHorizontal: horizontalScale(25),
    },
    makePayment: {
      color: Colors[theme].black,
      fontSize: moderateScale(32),
      fontFamily: Fonts.bold,
      marginTop: verticalScale(20),
    },
    userLogo: {
      height: moderateScale(125),
      width: moderateScale(100),
      marginTop: verticalScale(60),
    },
    title: {
      color: Colors[theme].black,
      fontSize: moderateScale(28),
      fontFamily: Fonts.bold,
      lineHeight: verticalScale(40),
      marginTop: verticalScale(20),
    },
    subTitle: {
      color: Colors[theme].black,
      fontSize: moderateScale(16),
      marginTop: verticalScale(10),
      fontFamily: Fonts.light,
      lineHeight: verticalScale(24),
    },
    yourIdentity: {
      flexDirection: 'row',
      marginVertical: verticalScale(18),
    },
    verifyYourIdentity: {
      marginRight: horizontalScale(10),
      fontFamily: Fonts.regular,
    },
    verifyIdentityParent: {
      position: 'absolute',
      width: '100%',
      bottom: verticalScale(20),
      paddingHorizontal: verticalScale(10),
    },
    verifyIdentity: {
      color: Colors[theme].white,
      fontSize: moderateScale(18),
    },
    verifyIdentityButton: {
      backgroundColor: Colors[theme].blue,
      width: '100%',
      height: verticalScale(50),
      borderRadius: moderateScale(50),
      alignSelf: 'center',
    },
    subInfo: {
      fontFamily: Fonts.regular,
    },
  });

export default styling;
