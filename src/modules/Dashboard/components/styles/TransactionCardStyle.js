import { Platform, StyleSheet } from 'react-native';
import { Fonts } from '../../../../assets';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../theme';

const styling = theme =>
  StyleSheet.create({
    card: {
      // width: '100%',
      backgroundColor: Colors[theme].white,
      marginVertical: verticalScale(10),
      borderRadius: Platform.OS === "web" ? 12 : moderateScale(24),
      paddingHorizontal: Platform.OS === "web" ? 5 : horizontalScale(8),
      overflow: 'hidden',
      flex: 1,
      elevation: 4
    },
    cardHeader: {
      width: '100%',
      height: verticalScale(60),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // padding: horizontalScale(12)
      paddingTop: Platform.OS === "web" ? 10 : horizontalScale(12),
      paddingLeft: Platform.OS === "web" ? 10 : horizontalScale(12),
      paddingRight: Platform.OS === "web" ? 10 : horizontalScale(12),

    },
    headerTitle: {
      color: Colors[theme].black,
      fontSize: Platform.OS === "web" ? 14 : moderateScale(18),
      fontFamily: Fonts.bold,
    },
    divider: {
      backgroundColor: Colors[theme].grey300,
      width: '100%',
      height: verticalScale(3),
    },
    testStyle: {
      fontSize: Platform.OS === "web" ? 13 : horizontalScale(13),
      fontFamily: Fonts.medium,
      color: Colors[theme]?.black
    },
    testStyle1: {
      fontSize: Platform.OS === "web" ? 13 : horizontalScale(13),
      fontFamily: Fonts.medium,
    },
    textStyle: {
      fontSize: Platform.OS === "web" ? 16 : horizontalScale(14),
      fontFamily: Fonts.regular,
      color: '#000'
    },
    smallText: {
      fontSize: Platform.OS === "web" ? 11 : horizontalScale(11),
      fontFamily: Fonts.regular,
      color: "#848484"
    }
  });

export default styling;
