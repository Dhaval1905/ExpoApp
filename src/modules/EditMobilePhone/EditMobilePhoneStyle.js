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
      paddingTop: verticalScale(25),
    },
    cardTitle: {
      fontSize: moderateScale(14),
      fontFamily: Fonts.medium,
      color: Colors[theme].grey500,
    },
    card: {
      paddingTop: verticalScale(10),
      backgroundColor: Colors[theme].white,
      borderRadius: moderateScale(16),
      // overflow: 'hidden',
      paddingHorizontal: horizontalScale(10),
      // marginTop: verticalScale(8),
      marginBottom: verticalScale(25),
      elevation:1
    },
    textInput: {
      borderColor: Colors[theme].black,
      // borderRadius: moderateScale(30),
      fontSize: moderateScale(18),
      marginTop: verticalScale(20),
      marginBottom: verticalScale(20),
      backgroundColor: Colors[theme].white,
      color:'#000'
    },

    bottomView: {
      paddingHorizontal: horizontalScale(20),
    },
    editEmailNote: {
      textAlign: 'center',
      fontFamily: Fonts.regular,
      color: Colors[theme].black,
      fontSize:verticalScale(14)
    },
    submitButton: {
      backgroundColor: Colors[theme].blue,
      width: '100%',
      marginVertical: verticalScale(10),
      height: verticalScale(45),
      borderRadius: moderateScale(20),
    },
  });

export default styling;
