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
      paddingHorizontal: horizontalScale(10),
    },
    cardT: {
      fontFamily: Fonts.medium,
    },
    card: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: Colors[theme].white,
      padding: moderateScale(20),
      borderRadius: moderateScale(20),
      marginVertical: verticalScale(10),
      elevation:4,
      margin:2
    },
    innerView: {
      flexDirection: 'row',
    },
    cardTitle: {
      fontFamily: Fonts.bold,
      color: Colors[theme].black,
      fontSize: moderateScale(15),
      marginLeft: horizontalScale(15),
    },
  });

export default styling;
