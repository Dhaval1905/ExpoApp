import { Platform, StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';
import { Fonts } from '../../assets';

const styling = theme =>
  StyleSheet.create({
    buttonBackground: {
      backgroundColor: Colors[theme]?.screenBackground,
      fontFamily: Fonts.regular,
      fontSize: Platform.OS === "web" ? 14 : moderateScale(14)
    },
    dropdownParent: {
      position: 'absolute',
      right: horizontalScale(10),
      top: horizontalScale(20)
    },
  });

export default styling;
