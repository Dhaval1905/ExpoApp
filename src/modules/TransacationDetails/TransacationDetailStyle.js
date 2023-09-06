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
    container: {
      flex: 1,
      paddingHorizontal: horizontalScale(10),
      // paddingTop: verticalScale(150),
    },
    bankLetter: {
      fontFamily: Fonts.bold,
      fontSize: moderateScale(28),
      color: Colors[theme].black,
      marginTop: verticalScale(15),
    },
    bankLetterNote: {
      fontFamily: Fonts.regular,
      fontSize: moderateScale(16),
      color: Colors[theme].grey500,
      marginTop: verticalScale(15),
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
    card: {
      backgroundColor: Colors[theme].white,
      borderRadius: moderateScale(15),
      paddingHorizontal: horizontalScale(8),
      marginVertical: verticalScale(8),
      paddingVertical: verticalScale(10),
    },
    cardHeader: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    cardHeaderIconParent: {
      height: moderateScale(40),
      width: moderateScale(40),
      margin: moderateScale(10),
    },
    cardHeaderIcon: {
      height: '100%',
      width: '100%',
    },
    customIconSize: {
      height: moderateScale(20),
      width: horizontalScale(20),
    },
    cardItems: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: verticalScale(8),
    },
    cardItemTitle: {
      fontFamily: Fonts.regular,
      color: Colors[theme].grey500,
    },
    divider: {
      width: '100%',
      height: verticalScale(0.5),
      backgroundColor: Colors[theme].grey500,
    },
    cardTitle: {
      fontSize: moderateScale(15),
      fontFamily: Fonts.medium,
      color: Colors[theme].black,
    },
    cardSubtitle: {
      fontFamily: Fonts.regular,
      color: Colors[theme].grey500,
    },
    amountText: {
      fontFamily: Fonts.regular,
      color: Colors[theme].black,
    },
    buttonStyle: {
      height: verticalScale(45),
      backgroundColor: Colors[theme].blue,
      width: '100%',
      marginVertical: verticalScale(12),
      borderRadius: moderateScale(40),
    },
    buttonTitle: {
      fontFamily: Fonts.bold,
      fontSize: moderateScale(18),
    },
    cardContainer: {
      width: "98%",
      alignSelf: "center",
      backgroundColor: 'white',
      borderRadius: moderateScale(15),
      padding: horizontalScale(12),
      marginTop: moderateScale(20),
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      // marginHorizontal:50,
      elevation: 5,
      marginBottom:5
    },
    cardTTxt: {
      fontSize: moderateScale(14),
      color: "black",
      fontFamily: Fonts.medium
    },
    row: {
      marginTop: moderateScale(10),
      flexDirection: "row"
    },
    cardFirst: {
      width: "85%",
      flexDirection: "row",
      alignItems: "center"
    },
    cardImg: {
      height: verticalScale(50),
      width: verticalScale(50),
      borderRadius: verticalScale(50),
      backgroundColor: Colors[theme].lightYellow,
      justifyContent: "center",
      alignItems: "center"
    },
    img: { height: verticalScale(20), width: verticalScale(30) },
    txt: {
      fontSize: moderateScale(14),
      color: Colors[theme].black,
      fontFamily: Fonts.medium
    },
    txt2: {
      fontSize: moderateScale(11),
      color: Colors[theme].grey600,
      fontFamily: Fonts.regular
    },
    cardSecond: {
      width: "15%",
      justifyContent: "center",
      alignItems: "center"
    },
    sTxt: {
      fontSize: moderateScale(14),
      color: Colors[theme].emerald,
      fontFamily: Fonts.bold
    },
    sCard: {
      // flexDirection: "row",
      // alignItems: "center",  
      justifyContent: "space-between",
      marginTop: moderateScale(15)
    },
    oTxt: {
      fontSize: moderateScale(16),
      color: Colors[theme].black,
      fontFamily: Fonts.medium
    },
    oTxt2: {
      fontSize: moderateScale(11),
      color: Colors[theme].black,
      fontFamily: Fonts.regular
    },
    touch: {  
      height: moderateScale(40),
      width: "34%",
      backgroundColor: Colors[theme].blue,
      borderRadius: moderateScale(40),
      marginTop: moderateScale(15),
      justifyContent: "center",
      alignItems: "center"
    },
    touchTxt: {
      fontSize: moderateScale(14),
      color: Colors[theme].white,
      fontFamily: Fonts.regular
    }
  });

export default styling;