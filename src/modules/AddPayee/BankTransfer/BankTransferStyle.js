import { StyleSheet } from 'react-native';
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
      paddingHorizontal: horizontalScale(18),
      // paddingBottom: verticalScale(80),
    },
    titleParent: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:
        theme === 'dark' ? Colors[theme]?.white : Colors[theme].grey300,
      paddingVertical: verticalScale(15),
      borderRadius: moderateScale(10),
    },
    onlyVisible: {
      marginBottom: verticalScale(25),
      fontFamily: Fonts.regular,
    },
    scrollView: {
      // flex: 1,
    },
    title: {
      color: Colors[theme].black,
      marginLeft: horizontalScale(10),
      fontSize: moderateScale(16),
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
      fontFamily: Fonts.regular,
    },
    onlyVisibleParent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingRight: verticalScale(10),
    },
    reviewButtonStyle: {
      backgroundColor: Colors[theme].blue,
      width: '90%',
      height: moderateScale(50),
      borderRadius: moderateScale(30),
      alignSelf:'center',
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
      backgroundColor: Colors[theme].screenBackground,
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
      borderTopRightRadius: horizontalScale(28),
      borderTopLeftRadius: horizontalScale(28),
    },
    modalHeader: {
      marginVertical: verticalScale(20),
      marginHorizontal: horizontalScale(20),
      justifyContent:'space-between',
      flexDirection:'row'
    },
    modalTitle: {
      color: Colors[theme].black,
      fontSize: moderateScale(16),
      fontFamily: Fonts.medium,
    },
    divider: {
      backgroundColor: Colors[theme].grey400,
      height: verticalScale(2),
    },
    modalList: {
      marginHorizontal: horizontalScale(14),
      flexDirection:'row',
      justifyContent:'space-between'
    },
    itemParent: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor:"#F2F2F2",
      padding:8,
      borderRadius:horizontalScale(30),
      justifyContent:'center',
      marginVertical:horizontalScale(20)
    },
    modalItem: {
      color: Colors[theme].black,
      fontSize: moderateScale(14),
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
      fontSize: moderateScale(14),
      marginTop: verticalScale(2),
      fontFamily: Fonts.regular,
    },
  });

export default styling;
