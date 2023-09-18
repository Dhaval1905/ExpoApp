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
      paddingTop: Platform.OS === "web" ? 25 : verticalScale(25),
    },
    cardTitle: {
      fontFamily: Fonts.regular,
      color: Colors[theme].grey500,
    },
    card: {
      backgroundColor: Colors[theme].white,
      borderRadius: Platform.OS === "web" ? 16 : moderateScale(16),
      overflow: 'hidden',
      paddingHorizontal: Platform.OS === "web" ? 10 : horizontalScale(10),
      marginTop: Platform.OS === "web" ? 8 : verticalScale(8),
      marginBottom: Platform.OS === "web" ? 25 : verticalScale(25),
      elevation: 1
    },
    details: {
      // width: horizontalScale(280),
      marginRight: Platform.OS === "web" ? 10 : horizontalScale(10),
    },
    imageParent: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    navigateButtons: {
      flexDirection: 'row',
      padding: Platform.OS === "web" ? 12 : verticalScale(12),
      marginVertical: Platform.OS === "web" ? 2 : verticalScale(2),
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    navigateButtonTitle: {
      fontFamily: Fonts.medium,
      color: Colors[theme].grey500,
      fontSize: Platform.OS === "web" ? 14 : moderateScale(14),
    },
    navigateButtonSubtitle: {
      fontFamily: Fonts.regular,
      color: Colors[theme].black,
      fontSize: Platform.OS === "web" ? 14 : moderateScale(14),
    },
    divider: {
      width: '100%',
      backgroundColor: Colors[theme].grey300,
      height: Platform.OS === "web" ? 2 : verticalScale(2),
    },
  });

export default styling;
