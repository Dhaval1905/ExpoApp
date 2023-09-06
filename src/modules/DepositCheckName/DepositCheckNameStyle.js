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
    container: {
      flex: 1,
      paddingHorizontal: horizontalScale(14),
    },
    card: {
      // backgroundColor: Colors[theme].white,
      borderRadius: moderateScale(15),
      padding: moderateScale(10),
    },
    imageParent: {
      height: verticalScale(150),
    },
    textInput: {
      borderColor: Colors[theme].black,
      borderWidth: 1,
      paddingHorizontal: horizontalScale(16),
      height: verticalScale(55),
      borderRadius: horizontalScale(28),
      marginTop:horizontalScale(26),
      color:'#000'
    },
    addupadateDbaParent: {
      borderColor: Colors[theme].black,
      borderRadius: moderateScale(30),
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      height: verticalScale(45),
      width: horizontalScale(150),
      marginVertical: verticalScale(20),
    },
    accountName: {
      fontFamily: Fonts.regular,
      color: Colors[theme].black,
      marginVertical: verticalScale(10),
    },
    addupadateDba: {
      fontFamily: Fonts.regular,
      color: Colors[theme].black,
    },
    checkAcceptNote: {
      fontFamily: Fonts.regular,
      color: "#999999",
      marginTop: verticalScale(30),
    },
    continueButtonStyle: {
      backgroundColor: Colors[theme].blue,
      height: verticalScale(50),
      width: '95%',
      borderRadius: moderateScale(24),
      position: 'absolute',
      bottom: verticalScale(15),
      alignSelf: 'center',
    },
    continue: {
      fontFamily: Fonts.medium,
      color: Colors[theme].white,
      fontSize: moderateScale(16),
    },
    disableButtonStyle: {
      backgroundColor: Colors[theme].grey400,
    },
    textStyle:{
      fontFamily:Fonts.medium,
      color:Colors[theme].black,
      marginTop:horizontalScale(20)
    }
  });

export default styling;
