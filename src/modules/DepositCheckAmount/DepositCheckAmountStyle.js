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
      // backgroundColor: Colors[theme].white,
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
    expectedAvailability: {
      color: Colors[theme].grey500,
      marginVertical: verticalScale(10),
      fontSize: moderateScale(16),
      fontFamily: Fonts.regular,
      marginRight: verticalScale(6),
    },
    expectedAvailabilityParent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    date: {
      fontSize: moderateScale(16),
      marginBottom: verticalScale(18),
      fontFamily: Fonts.regular,
      color: Colors[theme].black,
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
    amount: {
      fontSize: moderateScale(14),
      fontFamily: Fonts.medium,
      marginVertical: verticalScale(14),
      color:Colors[theme].black
    },
    textInput: {
      padding: 0,
      borderBottomWidth: 2,
      paddingBottom: verticalScale(8),
      fontSize: moderateScale(24),
      marginVertical: verticalScale(10),
      borderColor: Colors[theme].grey300,
      fontFamily: Fonts.bold,
      color: Colors[theme].black,
      // textAlign:'center'
    },
    textInputParent: {
      flexDirection: 'row',
      width: '100%',
    },
    depositCheckAmtNote: {
      fontSize: moderateScale(14),
      textAlign: 'center',
      fontFamily: Fonts.medium,
      color:Colors[theme].black
    },
  });

export default styling;
