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
      padding: Platform.OS === "web" ? 20 : moderateScale(20),
      borderRadius: Platform.OS === "web" ? 20 : moderateScale(20),
      marginVertical: Platform.OS === "web" ? 10 : verticalScale(10),
      elevation: 4,
      margin: 2
    },
    innerView: {
      flexDirection: 'row',
    },
    cardTitle: {
      fontFamily: Fonts.bold,
      color: Colors[theme].black,
      fontSize: Platform.OS === "web" ? 15 : moderateScale(15),
      marginLeft: Platform.OS === "web" ? 15 : horizontalScale(15),
    },
  });

export default styling;
