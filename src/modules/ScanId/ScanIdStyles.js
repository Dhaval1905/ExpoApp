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
      // backgroundColor: Colors[theme].white,
    },
    headerParent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: horizontalScale(10),
      marginTop: verticalScale(6),
    },
    headerTitle: {
      color: Colors[theme].black,
    },
    backBtnStyle: {
      tintColor: Colors[theme].black,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      // marginTop: verticalScale(190),
      paddingHorizontal: horizontalScale(25),
    },
    suggestionParent: {
      height: verticalScale(50),
      width: horizontalScale(250),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors[theme].orange,
      marginBottom: verticalScale(40),
    },
    triAngle: {
      position: 'absolute',
      top: verticalScale(40),
      width: 0,
      height: 0,
      borderLeftWidth: moderateScale(20),
      borderRightWidth: moderateScale(20),
      borderBottomWidth: moderateScale(40),
      borderStyle: 'solid',
      backgroundColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: Colors[theme].orange,
      transform: [{rotate: '180deg'}],
    },
    suggestionText: {
      color: Colors[theme].white,
      fontSize: moderateScale(16),
      fontFamily: Fonts.bold,
      zIndex: 1,
    },
    frame: {
      height: verticalScale(200),
      width: '100%',
      borderWidth: 2,
      borderColor: Colors[theme].orange,
    },
    modalParent: {
      flex: 1,
      backgroundColor: Colors[theme].black50,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: horizontalScale(35),
    },
    modalCard: {
      backgroundColor: Colors[theme].white,
      width: '100%',
      height: verticalScale(180),
      marginTop: verticalScale(50),
    },
    cardTitleParent: {
      flex: 0.3,
      justifyContent: 'center',
      paddingLeft: horizontalScale(10),
    },
    cardSubtitleParent: {
      flex: 0.3,
      justifyContent: 'center',
      paddingLeft: horizontalScale(10),
    },
    cardButtonsParent: {
      flexDirection: 'row',
      flex: 0.4,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    cardTitle: {
      color: Colors[theme].black,
      fontSize: moderateScale(16),
      fontFamily: Fonts.bold,
    },
    modalButton: {
      backgroundColor: Colors[theme].orange,
      height: verticalScale(50),
      paddingHorizontal: horizontalScale(10),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: moderateScale(8),
    },
    modalButtonText: {
      color: Colors[theme].white,
      fontSize: moderateScale(16),
      fontFamily: Fonts.bold,
    },
    exitNote: {
      fontFamily: Fonts.regular,
    },
    continueButton: {
      backgroundColor: Colors[theme].blue,
      width: '90%',
      marginVertical: verticalScale(10),
      height: verticalScale(45),
      borderRadius: moderateScale(20),
      alignSelf:'center'
    },
    image:{
      width: '100%',
      height:100,
      marginBottom:10
    }
  });

export default styling;
