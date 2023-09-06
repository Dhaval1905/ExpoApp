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
      marginTop: verticalScale(150),
    },
    changeCardPin: {
      fontFamily: Fonts.bold,
      fontSize: moderateScale(22),
      color: Colors[theme].black,
      marginVertical: verticalScale(10),
    },
    notes: {
      fontFamily: Fonts.medium,
      color: Colors[theme].black,
      fontSize: moderateScale(16),
      marginVertical: verticalScale(10),
    },
    buttonStyle: {
      width: '100%',
      height: verticalScale(40),
      backgroundColor: Colors[theme].blue,
      borderRadius: moderateScale(20),
    },
    point: {
      color: Colors[theme].black,
      fontFamily: Fonts.medium,
      fontSize: moderateScale(16),
    },
    pointsParent: {
      marginVertical: verticalScale(10),
    },
    buttonParent: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      alignSelf: 'center',
    },
  });

export default styling;
