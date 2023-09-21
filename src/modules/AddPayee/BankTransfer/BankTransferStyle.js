import { Platform, StyleSheet } from 'react-native';
import { Fonts } from '../../../assets';
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
      paddingHorizontal: Platform.OS === "web" ? 18 : horizontalScale(18),
      // paddingBottom: verticalScale(80),
    },
    titleParent: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:
        theme === 'dark' ? Colors[theme]?.white : Colors[theme].grey300,
      paddingVertical: Platform.OS === "web" ? 15 : verticalScale(15),
      borderRadius: Platform.OS === "web" ? 10 : moderateScale(10),
    },
    onlyVisible: {
      marginBottom: Platform.OS === "web" ? 25 : verticalScale(25),
      fontFamily: Fonts.regular,
    },
    scrollView: {
      // flex: 1,
    },
    title: {
      color: Colors[theme].black,
      marginLeft: Platform.OS === "web" ? 10 : horizontalScale(10),
      fontSize: Platform.OS === "web" ? 16 : moderateScale(16),
      fontFamily: Fonts.regular,
    },
    card: {
      flex: 1,
      // marginTop: verticalScale(20),
      // paddingVertical: verticalScale(10),
      // paddingHorizontal: horizontalScale(15),
      // // backgroundColor: Colors[theme].white,
      // borderRadius: moderateScale(10),
      // marginTop: verticalScale(10),
    },
    textInput: {
      backgroundColor: Colors[theme].screenBackground,
      marginVertical: Platform.OS === "web" ? 12 : verticalScale(12),
    },
    textInputMulti: {
      height: Platform.OS === "web" ? 150 : verticalScale(150),
    },
    checkingAccountParent: {
      flexDirection: 'row',
      height: Platform.OS === "web" ? 40 : verticalScale(40),
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    checkingAccount: {
      color: Colors[theme].black,
      fontSize: Platform.OS === "web" ? 16 : moderateScale(16),
      fontFamily: Fonts.regular,
    },
    onlyVisibleParent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingRight: Platform.OS === "web" ? 10 : verticalScale(10),
    },
    reviewButtonStyle: {
      backgroundColor: Colors[theme].blue,
      width: '90%',
      height: Platform.OS === "web" ? 50 : moderateScale(50),
      borderRadius: Platform.OS === "web" ? 30 : moderateScale(30),
      alignSelf: 'center',
    },
    review: {
      fontSize: Platform.OS === "web" ? 18 : moderateScale(18),
      fontFamily: Fonts.bold,
    },
    reviewButtonParent: {
      height: Platform.OS === "web" ? 70 : verticalScale(70),
      width: '100%',
      position: 'absolute',
      zIndex: 1,
      backgroundColor: Colors[theme].screenBackground,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: Platform.OS === "web" ? 30 : horizontalScale(30),
    },
    modalParent: {
      flex: 1,
      backgroundColor: Colors[theme].black50,
      justifyContent: 'flex-end',
    },
    modalContainer: {
      backgroundColor: Colors[theme].white,
      borderTopRightRadius: Platform.OS === "web" ? 28 : horizontalScale(28),
      borderTopLeftRadius: Platform.OS === "web" ? 28 : horizontalScale(28),
    },
    modalHeader: {
      marginVertical: Platform.OS === "web" ? 20 : verticalScale(20),
      marginHorizontal: Platform.OS === "web" ? 20 : horizontalScale(20),
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    modalTitle: {
      color: Colors[theme].black,
      fontSize: Platform.OS === "web" ? 16 : moderateScale(16),
      fontFamily: Fonts.medium,
    },
    divider: {
      backgroundColor: Colors[theme].grey400,
      height: Platform.OS === "web" ? 2 : verticalScale(2),
    },
    modalList: {
      marginHorizontal: Platform.OS === "web" ? 14 : horizontalScale(14),
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    itemParent: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: "#F2F2F2",
      padding: 8,
      borderRadius: Platform.OS === "web" ? 30 : horizontalScale(30),
      justifyContent: 'center',
      marginVertical: Platform.OS === "web" ? 20 : horizontalScale(20)
    },
    modalItem: {
      color: Colors[theme].black,
      fontSize: Platform.OS === "web" ? 14 : moderateScale(14),
    },
    selectedModalItem: {
      color: Colors[theme].white,
    },
    onlyVisible: {
      fontFamily: Fonts.regular,
    },
    rangeText: {
      fontFamily: Fonts.regular,
    },
    errorText: {
      color: Colors[theme].red,
      fontSize: Platform.OS === "web" ? 14 : moderateScale(14),
      marginTop: Platform.OS === "web" ? 2 : verticalScale(2),
      fontFamily: Fonts.regular,
    },
  });

export default styling;
