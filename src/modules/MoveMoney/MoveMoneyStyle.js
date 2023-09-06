import {StyleSheet} from 'react-native';
import {Fonts} from '../../assets';
import {Colors, horizontalScale, moderateScale} from '../../theme';

const styling = theme =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: Colors[theme]?.screenBackground,
    },
    balanceParent: {
      marginTop:horizontalScale(15),
      paddingHorizontal: horizontalScale(14)
    },
    balance: {
      color: Colors[theme].white,
      fontSize: moderateScale(32),
      fontFamily: Fonts.bold,
    },
    availableNow: {
      color: Colors[theme].white,
      fontSize: moderateScale(16),
      fontFamily: Fonts.regular,
    },
    scrollView: {
      flexGrow:1,
    },
    darkBlueText: {
      color: Colors[theme].blue900,
      fontFamily: Fonts.regular,
    },
    darkGreenText: {
      color: Colors[theme].green900,
      fontFamily: Fonts.regular,
    },
    greyText: {
      color: Colors[theme].grey500,
      fontFamily: Fonts.regular,
    },
  });

export default styling;
