import { Platform, StyleSheet } from 'react-native';
import { Fonts } from '../../assets';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styling = theme => {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: Colors[theme].white,
      paddingHorizontal: Platform.OS === "web" ? 15 : horizontalScale(15),
    },
    titleParent: {
      // flex: 0.2,
      justifyContent: 'flex-end',
      marginTop: Platform.OS === "web" ? 20 : horizontalScale(50)
    },
    title: {
      fontSize: Platform.OS === "web" ? 24 : moderateScale(24),
      color: Colors[theme].black,
      fontFamily: Fonts.regular,
      width: '80%'
    },
    subTitleParent: {
      // flex: 0.15,
      marginTop: Platform.OS === "web" ? 14 : horizontalScale(14),
      justifyContent: 'center',
      width: '80%'
    },
    subTitle: {
      fontSize: Platform.OS === "web" ? 16 : moderateScale(16),
      color: Colors[theme].grayText,
      fontFamily: Fonts.regular,
    },
    applyButtonParent: {
      // flex: 0.1,
      justifyContent: 'space-around',
      marginVertical: Platform.OS === "web" ? 20 : horizontalScale(20)
    },
    applyBtn: {
      backgroundColor: Colors[theme].blue,
      width: '35%',
      height: Platform.OS === "web" ? 40 : verticalScale(50),
      borderRadius: moderateScale(30),
    },
    applyText: {
      fontSize: Platform.OS === "web" ? 18 : moderateScale(18),
      fontFamily: Fonts.medium,
    },
    completeApplicationBtn: {
      width: '100%',
      height: Platform.OS === "web" ? 50 : verticalScale(50),
      borderRadius: Platform.OS === "web" ? 30 : moderateScale(30),
    },
    completeApplicationText: {
      fontSize: Platform.OS === "web" ? 18 : moderateScale(18),
      fontFamily: Fonts.medium,
    },
    dividerParent: {
      flex: 0.1,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
    },
    line: {
      height: verticalScale(1),
      width: '40%',
      backgroundColor: Colors[theme].black,
    },
    orParent: {
      width: '20%',
      alignItems: 'center',
    },
    or: {
      fontFamily: Fonts.regular,
      color: Colors[theme].grey700,
      fontSize: Platform.OS === "web" ? 18 : moderateScale(18),
    },
    alreadyAccountBtn: {
      width: '35%',
      height: Platform.OS === "web" ? 40 : verticalScale(50),
      borderRadius: Platform.OS === "web" ? 30 : moderateScale(30),
      backgroundColor: Colors[theme].white,
      borderColor: Colors[theme].black,
      borderWidth: Platform.OS === "web" ? 1 : horizontalScale(1),
      marginVertical: Platform.OS === "web" ? 20 : horizontalScale(20)
    },
    alreadyAccountText: {
      color: Colors[theme].black,
      fontSize: Platform.OS === "web" ? 18 : moderateScale(18),
      fontFamily: Fonts.medium,
    },
    introNoteParent: {
      flex: Platform.OS === "web" ? 0.50 : 0.32,
      justifyContent: 'flex-end',

    },
    introNote: {
      color: Colors[theme].grayText,
      fontSize: Platform.OS === "web" ? 13 : moderateScale(13),
      textAlign: 'center',
      fontFamily: Fonts.regular,
      fontWeight: '400'
    },
  });
};

export default styling;
