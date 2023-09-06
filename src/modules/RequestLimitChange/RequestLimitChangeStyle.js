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
      marginTop: verticalScale(20),
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
    cardTitle: {
      fontSize: moderateScale(15),
      fontFamily: Fonts.medium,
      color: Colors[theme].black,
    },
    cardSubtitle: {
      fontFamily: Fonts.regular,
      color: Colors[theme].grey500,
    },
    card: {
      backgroundColor: Colors[theme].white,
      borderRadius: moderateScale(15),
      padding: moderateScale(15),
      marginVertical: verticalScale(10),
    },
    textInput: {
      borderColor: Colors[theme].grey500,
      borderRadius: moderateScale(10),
      fontSize: moderateScale(18),
      marginVertical: verticalScale(20),
      backgroundColor: Colors[theme].white,
    },
    whatLimit: {
      fontFamily: Fonts.medium,
      fontSize: moderateScale(18),
      color: Colors[theme].black,
    },
    whichLimit: {
      fontFamily: Fonts.medium,
      fontSize: moderateScale(18),
      color: Colors[theme].black,
    },
    divider: {
      height: verticalScale(1.5),
      width: '100%',
      backgroundColor: Colors[theme].grey500,
    },
    cardItemParent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: verticalScale(15),
    },
    temporary: {
      color: Colors[theme].black,
      fontSize: moderateScale(16),
      marginRight: verticalScale(10),
    },
    permanent: {
      color: Colors[theme].black,
      fontSize: moderateScale(16),
    },
    requestLimitNOne: {
      color: Colors[theme].black,
      fontFamily: Fonts.medium,
      fontSize: moderateScale(17),
      marginVertical: verticalScale(10),
    },
    requestLimitNTwo: {
      color: Colors[theme].black,
      fontFamily: Fonts.regular,
      fontSize: moderateScale(14),
      marginVertical: verticalScale(10),
    },
    documentationOptional: {
      fontFamily: Fonts.medium,
      color: Colors[theme].black,
      fontSize: moderateScale(15),
      marginLeft: horizontalScale(8),
    },
    requestLimitDisclaimer: {
      fontFamily: Fonts.medium,
      fontSize: moderateScale(13),
    },
    buttonStyle: {
      backgroundColor: Colors[theme].blue,
      width: '100%',
      height: verticalScale(40),
      marginTop: verticalScale(30),
      borderRadius: moderateScale(20),
      marginBottom: verticalScale(10),
    },
    buttonTitle: {
      fontFamily: Fonts.medium,
      fontSize: moderateScale(18),
    },
  });

export default styling;
