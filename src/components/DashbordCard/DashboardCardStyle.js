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
    card: {
      flexDirection: 'row',
      height: verticalScale(100),
      backgroundColor: Colors[theme].white,
      borderRadius: moderateScale(24),
      padding: horizontalScale(12),
      overflow: 'hidden',
      marginVertical: verticalScale(10),
      elevation:4
    },
    backgroundImage: {
      flex: 1,
      // flexDirection: 'row',
    },
    cardDetailParent: {
      // flex: 0.4,
    },
    cardLogoParent: {
      // flex: 0.3,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    cardLogo: {
      height: moderateScale(35),
      width: moderateScale(35),
    },
    cardTitleParent: {
      flex: 0.3,
      justifyContent: 'flex-end',
    },
    cardTitle: {
      fontSize: moderateScale(18),
      color: Colors[theme].black,
      fontFamily: Fonts.bold,
    },
    cardSubTitleParent: {
      flex: 0.45,
    },
    cardSubTitle: {
      fontSize: moderateScale(14),
      color: Colors[theme].black,
      fontFamily: Fonts.regular,
    },
    navigateTextParent: {
      flex: 0.25,
    },
    navigateButton: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    navigateText: {
      fontSize: moderateScale(14),
      color: Colors[theme].black,
      fontFamily: Fonts.bold,
    },
  });

export default styling;
