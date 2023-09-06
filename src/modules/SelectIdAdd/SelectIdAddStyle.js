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
      paddingHorizontal: horizontalScale(25),
      paddingTop: verticalScale(40),
    },
    card: {
      height: verticalScale(90),
      width: '100%',
      backgroundColor: Colors[theme].white,
      borderRadius: moderateScale(15),
      flexDirection: 'row',
      marginVertical: verticalScale(10),
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    cardTitle: {
      flex: 0.7,
      color: Colors[theme].black,
      fontSize: moderateScale(18),
      fontFamily: Fonts.bold,
    },
    blackText: {
      color: Colors[theme].black,
      fontFamily: Fonts.regular,
    },
    bottomSpace: {
      marginBottom: verticalScale(20),
    },
  });

export default styling;
