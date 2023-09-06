import {StyleSheet} from 'react-native';
import {Colors, horizontalScale, verticalScale} from '../../theme';
import { Fonts } from '../../assets';

const styling = theme =>
  StyleSheet.create({
    buttonBackground: {
      backgroundColor: Colors[theme]?.screenBackground,
      fontFamily:Fonts.regular,
    },
    dropdownParent: {
      position: 'absolute',
      right:horizontalScale(10),
      top:horizontalScale(20)
    },
  });

export default styling;
