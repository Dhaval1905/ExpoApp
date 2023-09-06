import {StyleSheet} from 'react-native';
import {Fonts} from '../../assets';
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
      paddingHorizontal: horizontalScale(15),
      paddingTop: verticalScale(15),
    },
    statementPeriod: {
      fontFamily: Fonts.medium,
      color: Colors[theme].black,
      fontSize: moderateScale(14),
    },
    card: {
      marginTop: verticalScale(10),
    },
    divider: {
      height: verticalScale(1),
      backgroundColor: Colors[theme].grey300,
    },
    cardItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: verticalScale(10),
      elevation:4,
      backgroundColor: Colors[theme].white,
      padding: horizontalScale(10),
      borderRadius: moderateScale(20),
      margin:1
    },
    cardItemTitle: {
      fontFamily: Fonts.medium,
      color: Colors[theme].black,
      fontSize: moderateScale(18),
    },
  });

export default styling;
