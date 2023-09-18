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
    container: {
      flex: 1,
      paddingHorizontal: Platform.OS === "web" ? 20 : horizontalScale(20),
      paddingTop: Platform.OS === "web" ? 150 : verticalScale(150),
      alignItems: 'center'
    },
    bankLetter: {
      fontFamily: Fonts.bold,
      fontSize: Platform.OS === "web" ? 28 : moderateScale(28),
      color: Colors[theme].black,
      marginTop: Platform.OS === "web" ? 15 : verticalScale(15),
    },
    bankLetterNote: {
      fontFamily: Fonts.regular,
      fontSize: Platform.OS === "web" ? 14 : moderateScale(14),
      color: Colors[theme].black,
      marginTop: Platform.OS === "web" ? 15 : verticalScale(15),
      textAlign: 'center'
    },
    bottomView: {
      paddingHorizontal: Platform.OS === "web" ? 20 : horizontalScale(20),
    },
    continueButton: {
      backgroundColor: Colors[theme].blue,
      width: '100%',
      marginVertical: Platform.OS === "web" ? 10 : verticalScale(10),
      height: Platform.OS === "web" ? 45 : verticalScale(45),
      borderRadius: Platform.OS === "web" ? 20 : moderateScale(20),
    },
    cityParent: {
      flexDirection: 'row',
    },
  });

export default styling;
