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
      paddingHorizontal: horizontalScale(20),
      paddingTop: verticalScale(25),
    },
    cardTitle: {
      fontFamily: Fonts.regular,
      color: Colors[theme].grey500,
    },
    card: {
      backgroundColor: Colors[theme].white,
      borderRadius: moderateScale(16),
      overflow: 'hidden',
      paddingHorizontal: horizontalScale(10),
      marginTop: verticalScale(8),
      marginBottom: verticalScale(25),
      elevation:1
    },
    details: {
      // width: horizontalScale(280),
      marginRight: horizontalScale(10),
    },
    imageParent: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    navigateButtons: {
      flexDirection: 'row',
      padding: verticalScale(12),
      marginVertical: verticalScale(2),
      alignItems: 'center',
      justifyContent:'space-between'
    },
    navigateButtonTitle: {
      fontFamily: Fonts.medium,
      color: Colors[theme].grey500,
      fontSize: moderateScale(14),
    },
    navigateButtonSubtitle: {
      fontFamily: Fonts.regular,
      color: Colors[theme].black,
      fontSize: moderateScale(14),
    },
    divider: {
      width: '100%',
      backgroundColor: Colors[theme].grey300,
      height: verticalScale(2),
    },
  });

export default styling;
