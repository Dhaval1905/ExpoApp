import {StyleSheet} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';
import {Fonts} from '../../assets';

const styling = theme =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginVertical: verticalScale(12),
      alignItems: 'center',
    },
    iconParent: {
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      height: moderateScale(30),
      width: moderateScale(30),
      borderRadius: moderateScale(20),
    },
    logo: {
      height: '100%',
      width: '100%',
    },
    categoryName: {
      flex: 1,
      fontFamily: Fonts.bold,
      color: Colors[theme].black,
      fontSize: moderateScale(16),
      marginHorizontal: horizontalScale(10),
    },
  });

export default styling;
