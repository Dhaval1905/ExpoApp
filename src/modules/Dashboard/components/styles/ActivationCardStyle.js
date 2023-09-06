import {StyleSheet} from 'react-native';
import {Fonts} from '../../../../assets';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../theme';

const styling = theme =>
  StyleSheet.create({
    card: {
      width: '100%',
      height: verticalScale(150),
      backgroundColor: Colors[theme].white,
      marginVertical: verticalScale(10),
      borderRadius: moderateScale(10),
      overflow: 'hidden',
      paddingHorizontal: horizontalScale(8),
    },
    titleParent: {
      flex: 0.3,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    title: {
      color: Colors[theme].black,
      fontSize: moderateScale(18),
      fontFamily: Fonts.bold,
    },
    progressBarParent: {
      flex: 0.3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    progressBar: {
      height: verticalScale(25),
      width: '100%',
      backgroundColor:
        theme === 'light'
          ? Colors[theme].grey400
          : Colors[theme]?.screenBackground,
      borderRadius: moderateScale(6),
      flexDirection: 'row',
      overflow: 'hidden',
    },
    innerProgressBar: {
      backgroundColor: Colors[theme].blue,
    },
    detailParent: {
      flex: 0.4,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    detail: {
      color: Colors[theme].black,
      textAlign: 'center',
      fontFamily: Fonts.regular,
    },
  });

export default styling;
