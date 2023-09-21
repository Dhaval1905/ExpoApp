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
    card: {
      backgroundColor: Colors[theme].white,
      paddingHorizontal: Platform.OS === "web" ? 18 : horizontalScale(18),
      borderRadius: Platform.OS === "web" ? 18 : moderateScale(18),
      marginTop: Platform.OS === "web" ? 20 : verticalScale(20),
      marginHorizontal: Platform.OS === "web" ? 15 : horizontalScale(15),
    },
    divider: {
      backgroundColor: Colors[theme].grey300,
      width: '100%',
      height: Platform.OS === "web" ? 2 : verticalScale(2),
    },
    darkGreenText: {
      color: Colors[theme].green900,
    },
    greyText: {
      color: Colors[theme].grey500,
    },
    descriptionTitle: {
      color: Colors[theme].black,
      marginVertical: Platform.OS === "web" ? 10 : verticalScale(10),
      fontSize: Platform.OS === "web" ? 16 : moderateScale(16),
      fontFamily: Fonts.regular,
    },
    descriptionSubtitle: {
      fontSize: Platform.OS === "web" ? 16 : moderateScale(16),
      marginBottom: Platform.OS === "web" ? 18 : verticalScale(18),
      fontFamily: Fonts.regular,
    },
    addExternalAccountButtonParent: {
      height: Platform.OS === "web" ? 70 : verticalScale(70),
      width: '100%',
      position: 'absolute',
      zIndex: 1,
      bottom: 0,
      paddingHorizontal: Platform.OS === "web" ? 15 : horizontalScale(15),
      justifyContent: 'center',
      alignItems: 'center',
    },
    addExternalAccountButtonStyle: {
      backgroundColor: Colors[theme].blue,
      width: '100%',
      height: Platform.OS === "web" ? 50 : verticalScale(50),
      borderRadius: Platform.OS === "web" ? 30 : moderateScale(30),
    },
    addExternalAccount: {
      fontSize: Platform.OS === "web" ? 18 : moderateScale(18),
      fontFamily: Fonts.bold,
    },
  });

export default styling;
