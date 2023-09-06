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
      paddingHorizontal: horizontalScale(12),
      paddingTop: verticalScale(20),
    },
    cardTitle: {
      fontFamily: Fonts.regular,
      color: Colors[theme].grey500,
      fontSize:horizontalScale(14),
      marginTop:horizontalScale(10)
    },
    card: {
      backgroundColor: Colors[theme].white,
      borderRadius: moderateScale(24),
      paddingHorizontal: horizontalScale(12),
      padding: verticalScale(12),
      marginTop:horizontalScale(10)
      // elevation:1
    },
    navigateButtons: {
      flexDirection: 'row',
      height: verticalScale(45),
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    navigateButtonText: {
      fontFamily: Fonts.medium,
      color: Colors[theme].black,
      fontSize: moderateScale(14),
      marginLeft:horizontalScale(8)
    },
    divider: {
      width: '100%',
      backgroundColor: Colors[theme].grey300,
      height: verticalScale(2),
    },
    logout: {
      color: Colors[theme].white,
      fontFamily: Fonts.regular,
    },
    logoutButton: {
      width: '100%',
      height: verticalScale(50),
      backgroundColor: Colors[theme].blue,
      borderRadius: moderateScale(30),
      marginBottom: verticalScale(30),
    },
    version: {
      fontFamily: Fonts.regular,
      alignSelf: 'center',
      marginTop: verticalScale(30),
    },
  });

export default styling;
