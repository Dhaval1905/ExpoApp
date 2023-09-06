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
    header: {
      backgroundColor: Colors[theme]?.white,
    },
    headerTitle: {
      fontFamily: Fonts.bold,
    },
    container: {
      flex: 1,
      paddingHorizontal: horizontalScale(15),
      backgroundColor: Colors[theme]?.white,
    },
    card: {
      // backgroundColor: Colors[theme].white,
      // height: verticalScale(150),
      borderRadius: moderateScale(15),
      paddingHorizontal: horizontalScale(14),
      justifyContent: 'space-evenly',
      // marginTop: verticalScale(10),
    },
    emailQuestion: {
      color: Colors[theme].black,
      fontFamily: Fonts.regular,

      fontSize: moderateScale(16),
    },
    textInput: {
      backgroundColor: Colors[theme].white,
    },
    ConfirmParent: {
      // flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 10,
      alignSelf: 'center'
    },
    confirmBtn: {
      backgroundColor: Colors[theme].blue,
      width: '100%',
      height: verticalScale(50),
      borderRadius: moderateScale(30),
    },
    confirmText: {
      fontSize: moderateScale(18),
      fontFamily: Fonts.regular,
    },
    errorText: {
      color: Colors[theme].red,
      fontSize: moderateScale(14),
      marginTop: verticalScale(2),
      fontFamily: Fonts.regular,
    },
    applogoParent: {
      flex: 0.3,
      marginTop:horizontalScale(30)
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    appLogo: {
      height: verticalScale(70),
      width: horizontalScale(280),
    },
    loginStyle:{
      fontFamily:Fonts.medium,
      fontWeight:'600',
      fontSize:horizontalScale(25),
      color:Colors[theme].black,
      marginTop:5
    }
 
  });

export default styling;
