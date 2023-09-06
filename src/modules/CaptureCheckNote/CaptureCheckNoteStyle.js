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
      backgroundColor: Colors[theme].white,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: horizontalScale(24),
    },
    captureNoteParent: {
      flexDirection: 'row',
      marginVertical: verticalScale(10),
      alignItems: 'center',
    },
    captureNote: {
      fontSize: moderateScale(32),
      color: Colors[theme].black,
      fontFamily: Fonts.regular,
      marginRight: horizontalScale(4),
    },
    buttonPanel: {
      flexDirection: 'row',
      height: verticalScale(50),
      backgroundColor: Colors[theme].black,
      justifyContent: 'space-between',
      paddingHorizontal: horizontalScale(30),
      alignItems: 'center',
    },
    whiteText: {
      color: Colors[theme].white,
      fontFamily: Fonts.regular,
    },
  });

export default styling;
