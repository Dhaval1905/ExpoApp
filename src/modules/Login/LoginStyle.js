import { StyleSheet } from 'react-native';
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
      backgroundColor: Colors[theme].white,
    },
    container: {
      flex: 1,
      backgroundColor: Colors[theme].white,
      paddingHorizontal: horizontalScale(15),
    },
    applogoParent: {
      // flex: 0.3,
      marginVertical:horizontalScale(30)
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    appLogo: {
      height: verticalScale(70),
      width: horizontalScale(280),
    },
    textInput: {
      backgroundColor: Colors[theme].white,
      marginTop: verticalScale(10),
    },
    loginBtn: {
      width: '100%',
      height: verticalScale(50),
      backgroundColor: Colors[theme].blue,
      borderRadius: moderateScale(30),
      marginTop: verticalScale(30),
    },
    loginText: {
      fontSize: moderateScale(18),
      fontFamily: Fonts.medium,
    },
    resetPassword: {
      color: Colors[theme].black,
      fontSize: moderateScale(16),
      alignSelf: 'center',
      marginTop: verticalScale(18),
      fontFamily: Fonts.medium,
    },
    errorText: {
      color: Colors[theme].red,
      fontSize: moderateScale(14),
      marginTop: verticalScale(2),
      fontFamily: Fonts.regular,
    },
    applyNowParent: {
      flex: 0.87,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    newToRethink: {
      color: Colors[theme].black,
      fontSize: moderateScale(14),
      fontFamily: Fonts.regular,
    },
    applyNow: {
      color: Colors[theme].black,
      fontFamily: Fonts.bold,
      fontSize: moderateScale(16),
      marginLeft: horizontalScale(4),
    },
    loginStyle:{
      fontFamily:Fonts.medium,
      fontWeight:'600',
      fontSize:horizontalScale(25),
      color:Colors[theme].black,
      marginTop:5
    },
  });

export default styling;
