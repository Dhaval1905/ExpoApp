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
      paddingHorizontal: Platform.OS === "web" ? 15 : horizontalScale(15),
      paddingTop: Platform.OS === "web" ? 15 : verticalScale(15),
    },
    statementPeriod: {
      fontFamily: Fonts.medium,
      color: Colors[theme].black,
      fontSize: Platform.OS === "web" ? 14 : moderateScale(14),
    },
    card: {
      marginTop: Platform.OS === "web" ? 10 : verticalScale(10),
    },
    divider: {
      height: verticalScale(1),
      backgroundColor: Colors[theme].grey300,
    },
    cardItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: Platform.OS === "web" ? 10 : verticalScale(10),
      elevation: 4,
      backgroundColor: Colors[theme].white,
      padding: Platform.OS === "web" ? 10 : horizontalScale(10),
      borderRadius: Platform.OS === "web" ? 20 : moderateScale(20),
      margin: 1
    },
    cardItemTitle: {
      fontFamily: Fonts.medium,
      color: Colors[theme].black,
      fontSize: Platform.OS === "web" ? 18 : moderateScale(18),
    },
  });

export default styling;
