import {StyleSheet} from 'react-native';
import {Fonts} from '../../../assets';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../theme';

const styling = theme =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: Colors[theme]?.screenBackground,
    },
    container: {
      flex: 1,
      paddingHorizontal: horizontalScale(18),
      paddingBottom: verticalScale(80),
    },
    titleParent: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:
        theme === 'dark' ? Colors[theme].white : Colors[theme].grey300,
      paddingVertical: verticalScale(15),
      borderRadius: moderateScale(10),
      marginTop: verticalScale(10),
    },
    subTitle: {
      marginBottom: verticalScale(25),
      fontFamily: Fonts.regular,
    },
    scrollView: {
      flex: 1,
    },
    title: {
      color: Colors[theme].black,
      marginLeft: horizontalScale(10),
      fontSize: moderateScale(16),
      fontFamily: Fonts.regular,
    },
    card: {
      flex: 1,
      marginTop: verticalScale(20),
      paddingVertical: verticalScale(10),
      paddingHorizontal: horizontalScale(15),
      backgroundColor: Colors[theme].white,
      borderRadius: moderateScale(10),
    },
    textInput: {
      backgroundColor: Colors[theme].white,
      marginVertical: verticalScale(12),
    },
    textInputMulti: {
      height: verticalScale(150),
    },
    checkingAccountParent: {
      flexDirection: 'row',
      height: verticalScale(40),
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    checkingAccount: {
      color: Colors[theme].black,
      fontSize: moderateScale(16),
    },
    onlyVisibleParent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingRight: verticalScale(10),
    },
    reviewButtonStyle: {
      backgroundColor: Colors[theme].blue,
      width: '100%',
      height: verticalScale(50),
      borderRadius: moderateScale(30),
    },
    review: {
      fontSize: moderateScale(18),
      fontFamily: Fonts.bold,
    },
    reviewButtonParent: {
      height: verticalScale(70),
      width: '100%',
      position: 'absolute',
      zIndex: 1,
      backgroundColor:
        theme === 'dark'
          ? Colors[theme]?.screenBackground
          : Colors[theme].grey200,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: horizontalScale(30),
    },
    modalParent: {
      flex: 1,
      backgroundColor: Colors[theme].black50,
      justifyContent: 'flex-end',
    },
    modalContainer: {
      backgroundColor: Colors[theme].white,
      borderTopRightRadius: moderateScale(10),
      borderTopLeftRadius: moderateScale(10),
    },
    modalHeader: {
      marginVertical: verticalScale(20),
      marginHorizontal: horizontalScale(20),
    },
    modalTitle: {
      color: Colors[theme].black,
      fontSize: moderateScale(24),
      fontFamily: Fonts.bold,
    },
    divider: {
      backgroundColor: Colors[theme].grey400,
      height: verticalScale(2),
    },
    modalList: {
      marginHorizontal: horizontalScale(14),
    },
    itemParent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: verticalScale(15),
      alignItems: 'center',
    },
    modalItem: {
      color: Colors[theme].black,
      fontSize: moderateScale(14),
    },
    selectedModalItem: {
      color: Colors[theme].blue,
      fontFamily: Fonts.bold,
    },
    cityParent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    onlyVisible: {
      fontFamily: Fonts.regular,
    },
    rangeText: {
      fontFamily: Fonts.regular,
    },
  });

export default styling;
