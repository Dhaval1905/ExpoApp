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
      borderRadius: moderateScale(10),
      marginVertical: verticalScale(10),
    },
    innerView: {
      flexDirection: 'row',
    },
    cardTitle: {
      fontFamily: Fonts.bold,
      color: Colors[theme].blue,
      fontSize: moderateScale(16),
      marginLeft: horizontalScale(15),
    },
  });

export default styling;
