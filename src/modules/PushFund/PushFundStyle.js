import { StyleSheet } from 'react-native';
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
      borderRadius: moderateScale(18),
      marginTop: verticalScale(20),
      marginHorizontal: horizontalScale(16),
      flex:1
    },
    divider: {
      backgroundColor: Colors[theme].grey300,
      width: '100%',
      height: verticalScale(2),
    },
    darkGreenText: {
      color: Colors[theme].green900,
    },
    darkBlueText: {
      color: Colors[theme].blue900,
    },
    descriptionTitle: {
      color: Colors[theme].black,
      marginVertical: verticalScale(10),
      fontSize: moderateScale(16),
      fontFamily: Fonts.regular,
    },
    descriptionSubtitle: {
      fontSize: moderateScale(16),
      marginBottom: verticalScale(18),
      fontFamily: Fonts.regular,
    },
    routingNumberParent: {
      flex: 0.5,
    },
    subTitleParent: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: verticalScale(4),
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
      fontSize: moderateScale(18),
      fontFamily: Fonts.bold,
    },
    detailText1: {
      color: Colors[theme].black,
      fontSize: moderateScale(13),
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
      fontSize: moderateScale(12),
    },
    routingAccountNumberParent: {
      flexDirection: 'row',
      marginVertical: verticalScale(20),
      marginBottom: verticalScale(20),
      // marginHorizontal: horizontalScale(16),
      backgroundColor: Colors[theme].white,
      elevation: 2,
      borderRadius: horizontalScale(24),
      padding: horizontalScale(16),
      justifyContent: 'space-evenly'
    },
    routingNumberParent: {
      // flex: 0.5,
      borderLeftWidth: 0.2,
      paddingLeft: horizontalScale(15)
    },
    accountNumberParent: {
      // flex: 0.8,
      alignItems: 'center',
      flexDirection: 'row'
    },
    subTitleParent: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: verticalScale(4),
    },
    subTitle: {
      marginRight: horizontalScale(3),
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
      borderTopRightRadius: horizontalScale(32),
      borderTopLeftRadius: horizontalScale(32),
    },
    modalHeader: {
      marginVertical: verticalScale(20),
      marginHorizontal: horizontalScale(20),
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    modalTitle: {
      color: Colors[theme].black,
      fontSize: moderateScale(16),
      fontFamily: Fonts.medium,
    },
    inputView: {
      width: "90%",
      alignSelf: "center",
      marginTop: verticalScale(10),
    },
    txt: {
      fontSize: moderateScale(16),
      color: Colors[theme].grey700,
      fontFamily: Fonts.medium,
      marginBottom: moderateScale(5)
    },
    textInput: {
      backgroundColor: Colors[theme].white,
      borderWidth: 1,
      height: moderateScale(50),
      borderRadius: moderateScale(45),
      paddingLeft: moderateScale(20),
      fontSize: moderateScale(16),
      color:'#000'
    },
    loginBtn: {
      width: "90%",
      alignSelf: "center",
      height: verticalScale(50),
      backgroundColor: Colors[theme].blue,
      borderRadius: moderateScale(30),
      marginTop: "10%",
      marginBottom: moderateScale(20),
    },
    loginBtn1: {
      width: "90%",
      alignSelf: "center",
      height: verticalScale(50),
      backgroundColor: Colors[theme].blue,
      borderRadius: moderateScale(30),
    position:'absolute',
    bottom:horizontalScale(18),
    zIndex:9999
    },
    loginText: {
      fontSize: moderateScale(18),
      fontFamily: Fonts.medium,
    },
    srContainer: {
      // height: moderateScale(50),
      backgroundColor: Colors[theme].white,
      width: "96%", 
      alignSelf: "center",
      borderRadius: moderateScale(45),
      flexDirection: "row",
      alignItems: "center",
      padding:moderateScale(5),
      // paddingLeft: moderateScale(20),
      // paddingRight: moderateScale(5),
      marginBottom: moderateScale(15)
    },
    txtInput: {
      width: '80%',
      paddingLeft: moderateScale(10),
      fontSize: moderateScale(16),
      fontFamily: Fonts.regular,
      color:'#000'
    },
    flTouch: {
      width: "96%",
      height: verticalScale(70),
      alignItems: "center",
      flexDirection: "row",
      alignSelf: "center",
      marginTop:15
      // backgroundColor:'red'
    },
    flSub: {
      width: "70%",
      alignItems: "center",
      flexDirection: "row"
    },
    nmContainer: {
      height: verticalScale(50),
      width: verticalScale(50),
      borderRadius: verticalScale(50),
      backgroundColor: '#DFF7FF',
      alignItems: "center",
      justifyContent: "center"
    },
    nmTxt: {
      fontSize: moderateScale(14),
      color: Colors[theme].black,
      fontFamily: Fonts.regular
    },
    icTouch: {
      height: moderateScale(21),
      width: moderateScale(23),
      borderRadius: moderateScale(5),
      backgroundColor: Colors[theme].grey300,
      marginLeft: moderateScale(15),
      justifyContent: "center",
      alignItems: "center"
    },
    locTxt: {
      fontSize: moderateScale(12),
      color: Colors[theme].grey600,
      fontFamily: Fonts.regular
    },
    crTxt: {
      width: "30%",
      position: "absolute",
      right: moderateScale(-12),
      bottom: moderateScale(15),
      color:'#6B6B6B'
    }
  });

export default styling;
