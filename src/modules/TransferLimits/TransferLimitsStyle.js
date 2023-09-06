import {version} from 'react';
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
      paddingTop: verticalScale(20),
    },
    card: {
      backgroundColor: Colors[theme].white,
      borderRadius: moderateScale(16),
      paddingHorizontal: horizontalScale(10),
      marginVertical: verticalScale(8),
      paddingVertical: verticalScale(12),
      elevation:0.5
    },
    cardHeader: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    cardHeaderIconParent: {
      height: moderateScale(40),
      width: moderateScale(40),
      margin: moderateScale(10),
    },
    cardHeaderIcon: {
      height: '100%',
      width: '100%',
    },
    customIconSize: {
      height: moderateScale(20),
      width: horizontalScale(20),
    },
    cardItems: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: verticalScale(12),
    },
    cardItemTitle: {
      fontFamily: Fonts.medium,
      color: Colors[theme].grey500,
    },
    divider: {
      width: '100%',
      height: verticalScale(2),
      backgroundColor: Colors[theme].grey500,
    },
    cardTitle: {
      fontSize: moderateScale(15),
      fontFamily: Fonts.medium,
      color: Colors[theme].black,
    },
    cardSubtitle: {
      fontFamily: Fonts.regular,
      color: Colors[theme].grey500,
    },
    amountText: {
      fontFamily: Fonts.regular,
      color: Colors[theme].black,
    },
    buttonStyle: {
      height: verticalScale(45),
      backgroundColor: Colors[theme].blue,
      width: '100%',
      marginVertical: verticalScale(12),
      borderRadius: moderateScale(40),
    },
    buttonTitle: {
      fontFamily: Fonts.bold,
      fontSize: moderateScale(18),
    },
  });

export default styling;
