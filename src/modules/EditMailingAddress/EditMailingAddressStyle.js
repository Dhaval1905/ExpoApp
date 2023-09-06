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
      marginBottom: verticalScale(25),
    },
    card: {
      paddingTop: verticalScale(10),
      backgroundColor: Colors[theme].white,
      borderRadius: moderateScale(10),
      overflow: 'hidden',
      paddingHorizontal: horizontalScale(10),
      marginTop: verticalScale(8),
      marginBottom: verticalScale(25),
    },
    textInput: {
      borderColor: Colors[theme].grey500,
      borderRadius: moderateScale(10),
      fontSize: moderateScale(18),
      marginBottom: verticalScale(20),
      backgroundColor: Colors[theme].white,
      color:'#000'
    },
    textInputRows: {
      marginHorizontal: horizontalScale(3),
      width: horizontalScale(100),
      borderColor: Colors[theme].grey500,
      borderRadius: moderateScale(10),
      fontSize: moderateScale(18),
      marginBottom: verticalScale(20),
      backgroundColor: Colors[theme].white,
    },
    bottomView: {
      paddingHorizontal: horizontalScale(20),
    },
    editEmailNote: {
      textAlign: 'center',
      fontFamily: Fonts.regular,
      color: Colors[theme].grey500,
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
