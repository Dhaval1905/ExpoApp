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
      paddingTop: verticalScale(150),
      alignItems:'center'
    },
    bankLetter: {
      fontFamily: Fonts.bold,
      fontSize: moderateScale(28),
      color: Colors[theme].black,
      marginTop: verticalScale(15),
    },
    bankLetterNote: {
      fontFamily: Fonts.regular,
      fontSize: moderateScale(14),
      color: Colors[theme].black,
      marginTop: verticalScale(15),
      textAlign:'center'
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
  });

export default styling;
