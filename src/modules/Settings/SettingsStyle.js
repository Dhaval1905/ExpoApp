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
      paddingHorizontal: Platform.OS === "web" ? 12 : horizontalScale(12),
      paddingTop: Platform.OS === "web" ? 20 : verticalScale(20),
    },
    cardTitle: {
      fontFamily: Fonts.regular,
      color: Colors[theme].grey500,
      fontSize: Platform.OS === "web" ? 14 : horizontalScale(14),
      marginTop: Platform.OS === "web" ? 10 : horizontalScale(10)
    },
    card: {
      backgroundColor: Colors[theme].white,
      borderRadius: Platform.OS === "web" ? 24 : moderateScale(24),
      paddingHorizontal: Platform.OS === "web" ? 12 : horizontalScale(12),
      padding: Platform.OS === "web" ? 12 : verticalScale(12),
      marginTop: Platform.OS === "web" ? 10 : horizontalScale(10)
      // elevation:1
    },
    navigateButtons: {
      flexDirection: 'row',
      height: Platform.OS === "web" ? 45 : verticalScale(45),
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    navigateButtonText: {
      fontFamily: Fonts.medium,
      color: Colors[theme].black,
      fontSize: Platform.OS === "web" ? 14 : moderateScale(14),
      marginLeft: Platform.OS === "web" ? 8 : horizontalScale(8)
    },
    divider: {
      width: '100%',
      backgroundColor: Colors[theme].grey300,
      height: Platform.OS === "web" ? 2 : verticalScale(2),
    },
    logout: {
      color: Colors[theme].white,
      fontFamily: Fonts.regular,
    },
    logoutButton: {
      width: '100%',
      height: Platform.OS === "web" ? 50 : verticalScale(50),
      backgroundColor: Colors[theme].blue,
      borderRadius: Platform.OS === "web" ? 30 : moderateScale(30),
      marginBottom: Platform.OS === "web" ? 30 : verticalScale(30),
    },
    version: {
      fontFamily: Fonts.regular,
      alignSelf: 'center',
      marginTop: Platform.OS === "web" ? 30 : verticalScale(30),
    },
  });

export default styling;
