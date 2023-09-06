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
    signEndorseCheck: {
      fontSize: moderateScale(22),
      fontFamily: Fonts.medium,
      color: Colors[theme].black,
      marginVertical: verticalScale(14),
      marginHorizontal: horizontalScale(12),
      textAlign:'center'
    },
    imageParent: {
      height: verticalScale(200),
      paddingVertical: verticalScale(15),
    },
    signEndorseNOne: {
      marginVertical: verticalScale(10),
    },
    commonText: {
      color: Colors[theme].grey500,
      fontFamily: Fonts.regular,
      textAlign:'center'
    },
    divider: {
      backgroundColor: Colors[theme].grey300,
      width: '100%',
      height: verticalScale(2),
    },
    continueParent: {
      width: '100%',
      position: 'absolute',
      zIndex: 1,
      bottom: 0,
      paddingHorizontal: horizontalScale(15),
      justifyContent: 'center',
      alignItems: 'center',
    },
    continueButtonStyle: {
      backgroundColor: Colors[theme].blue,
      width: '100%',
      height: verticalScale(50),
      borderRadius: moderateScale(30),
      marginVertical: verticalScale(10),
    },
    continue: {
      color: Colors[theme].white,
      fontSize: moderateScale(18),
      fontFamily: Fonts.bold,
    },
    signEndorseNThree: {
      fontSize: moderateScale(14),
      fontFamily: Fonts.medium,
      marginLeft: horizontalScale(12),
      color:'#000',
      width:'92%'
    },
    signEndorseNThreeParent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default styling;
