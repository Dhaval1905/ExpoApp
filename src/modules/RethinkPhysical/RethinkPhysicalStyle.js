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
      paddingHorizontal: horizontalScale(10),
    },
    card: {
      backgroundColor: Colors[theme].white,
      borderRadius: moderateScale(10),
      paddingLeft: horizontalScale(10),
    },
    cardItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: verticalScale(14),
      paddingRight: horizontalScale(14),
    },
    cardItemName: {
      fontFamily: Fonts.regular,
      color: Colors[theme].black,
      fontSize: moderateScale(16),
    },
    divider: {
      height: verticalScale(1),
      backgroundColor: Colors[theme].grey300,
    },
    manageDebitCard: {
      fontFamily: Fonts.regular,
      marginVertical: verticalScale(10),
      fontSize: moderateScale(14),
    },
  });

export default styling;
