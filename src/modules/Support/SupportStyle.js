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
      paddingHorizontal: Platform.OS === "web" ? 10 : horizontalScale(10),
    },
    cardT: {
      fontFamily: Fonts.medium,
    },
    card: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: Colors[theme].white,
      padding: Platform.OS === "web" ? 24 : moderateScale(24),
      borderRadius: Platform.OS === "web" ? 20 : moderateScale(20),
      marginVertical: Platform.OS === "web" ? 10 : verticalScale(10),
      elevation: 2,
      margin: 2
    },
    innerView: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    cardTitle: {
      fontFamily: Fonts.medium,
      color: Colors[theme].black,
      fontSize: Platform.OS === "web" ? 14 : moderateScale(14),
      marginLeft: Platform.OS === "web" ? 15 : horizontalScale(15),
    },
  });

export default styling;
