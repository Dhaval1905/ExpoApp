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
      backgroundColor: Colors[theme].white,
    },
    container: {
      flex: 1,
      backgroundColor: Colors[theme].white,
      paddingHorizontal: Platform.OS === "web" ? 15 : horizontalScale(15),
    },
    applogoParent: {
      // flex: 0.3,
      marginVertical: Platform.OS === "web" ? 30 : horizontalScale(30)
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    appLogo: {
      height: Platform.OS === "web" ? 70 : verticalScale(70),
      width: Platform.OS === "web" ? 280 : horizontalScale(280),
    },
    textInput: {
      backgroundColor: Colors[theme].white,
      width: "40%",
      height: Platform.OS === "web" ? 40 : moderateScale(40),
      marginTop: Platform.OS === "web" ? 10 : verticalScale(10),
    },
    loginBtn: {
      width: '30%',
      height: Platform.OS === "web" ? 40 : verticalScale(50),
      backgroundColor: Colors[theme].blue,
      borderRadius: Platform.OS === "web" ? 30 : moderateScale(30),
      marginTop: Platform.OS === "web" ? 30 : verticalScale(30),
      // alignSelf: "center"
    },
    loginText: {
      fontSize: Platform.OS === "web" ? 18 : moderateScale(18),
      fontFamily: Fonts.medium,
    },
    resetPassword: {
      color: Colors[theme].black,
      fontSize: Platform.OS === "web" ? 16 : moderateScale(16),
      alignSelf: 'center',
      marginTop: Platform.OS === 'web' ? verticalScale(30) : verticalScale(18),
      fontFamily: Fonts.medium,
    },
    errorText: {
      color: Colors[theme].red,
      fontSize: Platform.OS === "web" ? 14 : moderateScale(14),
      marginTop: Platform.OS === "web" ? 2 : verticalScale(2),
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
      fontSize: Platform.OS === "web" ? 14 : moderateScale(14),
      fontFamily: Fonts.regular,
    },
    applyNow: {
      color: Colors[theme].black,
      fontFamily: Fonts.bold,
      fontSize: Platform.OS === "web" ? 16 : moderateScale(16),
      marginLeft: Platform.OS === "web" ? 4 : horizontalScale(4),
    },
    loginStyle: {
      fontFamily: Fonts.medium,
      fontWeight: '600',
      fontSize: Platform.OS === "web" ? 25 : horizontalScale(25),
      color: Colors[theme].black,
      marginTop: 5
    },
  });

export default styling;
