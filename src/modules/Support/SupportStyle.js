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
      padding: moderateScale(24),
      borderRadius: moderateScale(20),
      marginVertical: verticalScale(10),
      elevation:2,
      margin:2
    },
    innerView: {
      flexDirection: 'row',
      alignItems:'center'
    },
    cardTitle: {
      fontFamily: Fonts.medium,
      color: Colors[theme].black,
      fontSize: moderateScale(14),
      marginLeft: horizontalScale(15),
    },
  });

export default styling;
