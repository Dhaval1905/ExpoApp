import { Platform, StyleSheet } from 'react-native';
import { Fonts } from '../../assets';
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
    card: {
      backgroundColor: Colors[theme].screenBackground,
      // paddingHorizontal: horizontalScale(18),
      borderRadius: Platform.OS === "web" ? 18 : moderateScale(18),
      marginTop: Platform.OS === "web" ? 20 : verticalScale(20),
      marginHorizontal: Platform.OS === "web" ? 16 : horizontalScale(16),
      flex: 1
    },
    divider: {
      backgroundColor: Colors[theme].grey300,
      width: '100%',
      height: Platform.OS === "web" ? 2 : verticalScale(2),
    },
    darkGreenText: {
      color: Colors[theme].green900,
    },
    darkBlueText: {
      color: Colors[theme].blue900,
    },
    descriptionTitle: {
      color: Colors[theme].black,
      marginVertical: Platform.OS === "web" ? 10 : verticalScale(10),
      fontSize: Platform.OS === "web" ? 16 : moderateScale(16),
      fontFamily: Fonts.regular,
    },
    descriptionSubtitle: {
      fontSize: Platform.OS === "web" ? 16 : moderateScale(16),
      marginBottom: Platform.OS === "web" ? 18 : verticalScale(18),
      fontFamily: Fonts.regular,
    },
    routingNumberParent: {
      flex: 0.5,
    },
    subTitleParent: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: Platform.OS === "web" ? 4 : verticalScale(4),
    },
    routingNumber: {
      fontFamily: Fonts.regular,
    },
    accountNumber: {
      fontFamily: Fonts.regular,
    },
    detailParent: {
      flex: 0.7,
      justifyContent: 'center',
    },
    detailText: {
      color: Colors[theme].black,
      fontSize: Platform.OS === "web" ? 18 : moderateScale(18),
      fontFamily: Fonts.bold,
    },
    detailText1: {
      color: Colors[theme].black,
      fontSize: Platform.OS === "web" ? 13 : moderateScale(13),
      fontFamily: Fonts.regular,
      marginTop: 5
    },
    rightParent: {
      flex: 0.1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    choosePayMethod: {
      fontFamily: Fonts.regular,
      fontSize: Platform.OS === "web" ? 12 : moderateScale(12),
    },
    routingAccountNumberParent: {
      flexDirection: 'row',
      marginVertical: Platform.OS === "web" ? 20 : verticalScale(20),
      marginBottom: Platform.OS === "web" ? 20 : verticalScale(20),
      // marginHorizontal: horizontalScale(16),
      backgroundColor: Colors[theme].white,
      elevation: 2,
      borderRadius: Platform.OS === "web" ? 24 : horizontalScale(24),
      padding: Platform.OS === "web" ? 16 : horizontalScale(16),
      justifyContent: 'space-evenly'
    },
    routingNumberParent: {
      // flex: 0.5,
      borderLeftWidth: 0.2,
      paddingLeft: Platform.OS === "web" ? 15 : horizontalScale(15)
    },
    accountNumberParent: {
      // flex: 0.8,
      alignItems: 'center',
      flexDirection: 'row'
    },
    subTitleParent: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: Platform.OS === "web" ? 4 : verticalScale(4),
    },
    subTitle: {
      marginRight: Platform.OS === "web" ? 3 : horizontalScale(3),
      fontFamily: Fonts.bold,
      color: Colors[theme]?.black,
      fontSize: 12
    },
    routingNumber: {
      color: Colors[theme]?.grey700,
      fontFamily: Fonts.regular,
    },
    accountNumber: {
      color: Colors[theme]?.grey700,
      fontFamily: Fonts.regular,
    },

    /// Bottomsheet modal style
    modalParent: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.5)",
      justifyContent: 'flex-end',
    },
    modalContainer: {
      backgroundColor: Colors[theme].white,
      borderTopRightRadius: Platform.OS === "web" ? 32 : horizontalScale(32),
      borderTopLeftRadius: Platform.OS === "web" ? 32 : horizontalScale(32),
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
    inputView: {
      width: "90%",
      alignSelf: "center",
      marginTop: Platform.OS === "web" ? 10 : verticalScale(10),
    },
    txt: {
      fontSize: Platform.OS === "web" ? 16 : moderateScale(16),
      color: Colors[theme].grey700,
      fontFamily: Fonts.medium,
      marginBottom: Platform.OS === "web" ? 5 : moderateScale(5)
    },
    textInput: {
      backgroundColor: Colors[theme].white,
      borderWidth: 1,
      height: Platform.OS === "web" ? 50 : moderateScale(50),
      borderRadius: Platform.OS === "web" ? 45 : moderateScale(45),
      paddingLeft: Platform.OS === "web" ? 20 : moderateScale(20),
      fontSize: Platform.OS === "web" ? 16 : moderateScale(16),
      color: '#000'
    },
    loginBtn: {
      width: "90%",
      alignSelf: "center",
      height: Platform.OS === "web" ? 50 : verticalScale(50),
      backgroundColor: Colors[theme].blue,
      borderRadius: Platform.OS === "web" ? 30 : moderateScale(30),
      marginTop: "10%",
      marginBottom: Platform.OS === "web" ? 20 : moderateScale(20),
    },
    loginBtn1: {
      width: "90%",
      alignSelf: "center",
      height: Platform.OS === "web" ? 50 : verticalScale(50),
      backgroundColor: Colors[theme].blue,
      borderRadius: Platform.OS === "web" ? 30 : moderateScale(30),
      position: 'absolute',
      bottom: Platform.OS === "web" ? 18 : horizontalScale(18),
      zIndex: 9999
    },
    loginText: {
      fontSize: Platform.OS === "web" ? 18 : moderateScale(18),
      fontFamily: Fonts.medium,
    },
    srContainer: {
      // height: moderateScale(50),
      backgroundColor: Colors[theme].white,
      width: "96%",
      alignSelf: "center",
      borderRadius: Platform.OS === "web" ? 45 : moderateScale(45),
      flexDirection: "row",
      alignItems: "center",
      padding: Platform.OS === "web" ? 5 : moderateScale(5),
      // paddingLeft: moderateScale(20),
      // paddingRight: moderateScale(5),
      marginBottom: Platform.OS === "web" ? 15 : moderateScale(15)
    },
    txtInput: {
      width: '80%',
      paddingLeft: Platform.OS === "web" ? 10 : moderateScale(10),
      fontSize: Platform.OS === "web" ? 16 : moderateScale(16),
      fontFamily: Fonts.regular,
      color: '#000'
    },
    flTouch: {
      width: "96%",
      height: Platform.OS === "web" ? 70 : verticalScale(70),
      alignItems: "center",
      flexDirection: "row",
      alignSelf: "center",
      marginTop: 15
      // backgroundColor:'red'
    },
    flSub: {
      width: "70%",
      alignItems: "center",
      flexDirection: "row"
    },
    nmContainer: {
      height: Platform.OS === "web" ? 50 : verticalScale(50),
      width: Platform.OS === "web" ? 50 : verticalScale(50),
      borderRadius: Platform.OS === "web" ? 50 : verticalScale(50),
      backgroundColor: '#DFF7FF',
      alignItems: "center",
      justifyContent: "center"
    },
    nmTxt: {
      fontSize: Platform.OS === "web" ? 14 : moderateScale(14),
      color: Colors[theme].black,
      fontFamily: Fonts.regular
    },
    icTouch: {
      height: Platform.OS === "web" ? 21 : moderateScale(21),
      width: Platform.OS === "web" ? 23 : moderateScale(23),
      borderRadius: Platform.OS === "web" ? 5 : moderateScale(5),
      backgroundColor: Colors[theme].grey300,
      marginLeft: Platform.OS === "web" ? 15 : moderateScale(15),
      justifyContent: "center",
      alignItems: "center"
    },
    locTxt: {
      fontSize: Platform.OS === "web" ? 12 : moderateScale(12),
      color: Colors[theme].grey600,
      fontFamily: Fonts.regular
    },
    crTxt: {
      width: "30%",
      position: "absolute",
      right: Platform.OS === "web" ? -12 : moderateScale(-12),
      bottom: Platform.OS === "web" ? 15 : moderateScale(15),
      color: '#6B6B6B'
    }
  });

export default styling;
