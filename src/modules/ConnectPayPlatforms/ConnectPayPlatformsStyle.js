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
    card: {
      backgroundColor: Colors[theme].white,
      paddingHorizontal: horizontalScale(18),
      borderRadius: moderateScale(18),
      marginTop: verticalScale(20),
      marginHorizontal: horizontalScale(15),
    },
    divider: {
      backgroundColor: Colors[theme].grey300,
      width: '100%',
      height: verticalScale(2),
    },
    darkGreenText: {
      color: Colors[theme].green900,
    },
    darkBlueText: {
      color: Colors[theme].blue900,
    },
    descriptionTitle: {
      color: Colors[theme].black,
      marginVertical: verticalScale(10),
      fontSize: moderateScale(16),
      fontFamily: Fonts.regular,
    },
    descriptionSubtitle: {
      fontSize: moderateScale(16),
      marginBottom: verticalScale(18),
      fontFamily: Fonts.regular,
    },
    goToButtonParent: {
      height: verticalScale(70),
      width: '100%',
      position: 'absolute',
      zIndex: 1,
      bottom: 0,
      paddingHorizontal: horizontalScale(15),
      justifyContent: 'center',
      alignItems: 'center',
    },
    goToButtonStyle: {
      backgroundColor: Colors[theme].blue,
      width: '100%',
      height: verticalScale(50),
      borderRadius: moderateScale(30),
    },
    goToRethinkApps: {
      fontSize: moderateScale(18),
      fontFamily: Fonts.bold,
    },
  });

export default styling;
