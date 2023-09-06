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
      backgroundColor: Colors[theme]?.screenBackground,
    },
    container: {
      flex: 1,
      paddingHorizontal: horizontalScale(15),
    },
    card: {
      backgroundColor: Colors[theme].white,
      borderRadius: moderateScale(15),
      padding: moderateScale(15),
      justifyContent: 'space-evenly',
      marginTop: verticalScale(10),
      // flex: 1
    },
    emailQuestion: {
      color: Colors[theme].black,
      fontFamily: Fonts.regular,
      fontSize: moderateScale(16),
      marginBottom: verticalScale(25),
    },
    textInput: {
      backgroundColor: Colors[theme].white,
    },
    ConfirmParent: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: horizontalScale(15)
      // marginTop: verticalScale(20),
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
    resetPassword: {
      color: Colors[theme]?.blue,
      fontFamily: Fonts.medium,
      fontSize: moderateScale(16),
      // marginTop: verticalScale(15),
    },
  });

export default styling;
