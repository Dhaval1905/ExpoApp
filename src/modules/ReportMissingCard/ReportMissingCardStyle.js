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
      marginTop: verticalScale(30),
    },
    reportMissingCard: {
      fontFamily: Fonts.bold,
      fontSize: moderateScale(22),
      color: Colors[theme].black,
      marginVertical: verticalScale(10),
    },
    notes: {
      fontFamily: Fonts.medium,
      color: Colors[theme].black,
      fontSize: moderateScale(16),
      marginVertical: verticalScale(10),
    },
    buttonStyle: {
      width: '100%',
      height: verticalScale(40),
      backgroundColor: Colors[theme].blue,
      borderRadius: moderateScale(20),
    },
    buttonParent: {
      position: 'absolute',
      bottom: verticalScale(15),
      width: '100%',
      alignSelf: 'center',
    },
    card: {
      backgroundColor: Colors[theme].white,
      borderRadius: moderateScale(10),
      padding: moderateScale(10),
      marginTop: verticalScale(15),
    },
    cardTitle: {
      color: Colors[theme].grey400,
      fontFamily: Fonts.regular,
      marginBottom: verticalScale(10),
    },
    divider: {
      backgroundColor: Colors[theme].grey400,
      height: verticalScale(1),
      marginVertical: verticalScale(10),
    },
    cardItem: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
    },
    cardItemTitle: {
      fontFamily: Fonts.regular,
      color: Colors[theme].black,
    },
    cardItemLeftIcon: {
      position: 'absolute',
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default styling;
