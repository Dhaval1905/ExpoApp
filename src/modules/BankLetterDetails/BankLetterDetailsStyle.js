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
      // paddingTop: verticalScale(150),
    },
    bankLetter: {
      fontFamily: Fonts.bold,
      fontSize: moderateScale(28),
      color: Colors[theme].black,
      marginTop: verticalScale(15),
    },
    bankLetterNote: {
      fontFamily: Fonts.regular,
      fontSize: moderateScale(16),
      color: Colors[theme].grey500,
      marginTop: verticalScale(15),
    },
    bottomView: {
      paddingHorizontal: horizontalScale(20),
    },
    continueButton: {
      backgroundColor: Colors[theme].blue,
      width: '100%',
      marginVertical: verticalScale(10),
      height: verticalScale(45),
      borderRadius: moderateScale(20),
    },
    cityParent: {
      flexDirection: 'row',
    },
    card: {
      backgroundColor: Colors[theme].white,
      borderRadius: moderateScale(16),
      paddingHorizontal: horizontalScale(12),
      margin: verticalScale(5),
      paddingVertical: verticalScale(12),
      elevation:1
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
      marginVertical: verticalScale(14),
    },
    cardItemTitle: {
      fontFamily: Fonts.medium,
      color: Colors[theme].grey500,
      alignSelf:'center'
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
      width:'45%',
      textAlign:'right'
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
