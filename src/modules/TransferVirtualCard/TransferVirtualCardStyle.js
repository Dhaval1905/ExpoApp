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
      paddingBottom: verticalScale(20),
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
      fontSize: moderateScale(18),
      fontFamily: Fonts.bold,
    },
    descriptionSubtitle: {
      fontSize: moderateScale(16),
      marginBottom: verticalScale(18),
      fontFamily: Fonts.regular,
    },
    socialCard: {
      flexDirection: 'row',
      height: verticalScale(60),
      marginVertical: verticalScale(12),
    },
    socialIconParent: {
      flex: 0.2,
      justifyContent: 'center',
    },
    socialIcon: {
      height: moderateScale(50),
      width: moderateScale(50),
    },
    socialNameParent: {
      flex: 0.6,
      justifyContent: 'space-evenly',
    },
    appTitle: {
      color: Colors[theme].black,
      fontSize: moderateScale(18),
      fontFamily: Fonts.bold,
    },
    goToApp: {
      fontFamily: Fonts.regular,
    },
    rightIcon: {
      flex: 0.2,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
  });

export default styling;
