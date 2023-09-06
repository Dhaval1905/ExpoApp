import {StyleSheet} from 'react-native';
import {Fonts} from '../../assets';
import {Colors, horizontalScale, verticalScale} from '../../theme';

const styling = theme =>
  StyleSheet.create({
    defaultButtonStyle: {
      height: verticalScale(30),
      width: horizontalScale(150),
      backgroundColor: Colors[theme].black,
      justifyContent: 'center',
      alignItems: 'center',
    },
    defaultTextStyle: {
      color: Colors[theme].white,
      fontFamily: Fonts.regular,
    },
  });

export default styling;
