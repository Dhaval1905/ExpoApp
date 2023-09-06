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
    headerParent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginRight: horizontalScale(15),
    },
    container: {
      flex: 1,
      paddingHorizontal: horizontalScale(15),
    },
    card: {
      backgroundColor: Colors[theme].white,
      borderRadius: moderateScale(15),
      padding: moderateScale(12),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: verticalScale(20),
    },
    username: {
      fontFamily: Fonts.medium,
      color: Colors[theme].black,
    },
    usermail: {
      fontFamily: Fonts.regular,
      color: Colors[theme].grey500,
    },
    userType: {
      fontFamily: Fonts.regular,
      color: Colors[theme].blue,
    },
  });

export default styling;
