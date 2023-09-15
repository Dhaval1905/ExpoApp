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
    card: {
      flexDirection: 'row',
      height: Platform.OS === "web" ? 70 : verticalScale(100),
      backgroundColor: Colors[theme].white,
      borderRadius: Platform.OS === "web" ? 12 : moderateScale(24),
      padding: Platform.OS === "web" ? 12 : horizontalScale(12),
      overflow: 'hidden',
      marginVertical: verticalScale(10),
      elevation: 4
    },
    backgroundImage: {
      flex: 1,
      // flexDirection: 'row',
    },
    cardDetailParent: {
      // flex: 0.4,
    },
    cardLogoParent: {
      // flex: 0.3,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    cardLogo: {
      height: Platform.OS === "web" ? 30 : moderateScale(35),
      width: Platform.OS === "web" ? 30 : moderateScale(35),
    },
    cardTitleParent: {
      flex: 0.3,
      justifyContent: 'flex-end',
    },
    cardTitle: {
      fontSize: Platform.OS === "web" ? 14 : moderateScale(18),
      color: Colors[theme].black,
      fontFamily: Fonts.bold,
    },
    cardSubTitleParent: {
      flex: 0.45,
    },
    cardSubTitle: {
      fontSize: Platform.OS === "web" ? 12 : moderateScale(14),
      color: Colors[theme].black,
      fontFamily: Fonts.regular,
    },
    navigateTextParent: {
      flex: 0.25,
    },
    navigateButton: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    navigateText: {
      fontSize: moderateScale(14),
      color: Colors[theme].black,
      fontFamily: Fonts.bold,
    },
  });

export default styling;
