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
    container: {
      flex: 1,
      paddingHorizontal: Platform.OS === "web" ? 10 : horizontalScale(10),
      // paddingTop: verticalScale(150),
    },
    bankLetter: {
      fontFamily: Fonts.bold,
      fontSize: Platform.OS === "web" ? 28 : moderateScale(28),
      color: Colors[theme].black,
      marginTop: Platform.OS === "web" ? 15 : verticalScale(15),
    },
    bankLetterNote: {
      fontFamily: Fonts.regular,
      fontSize: Platform.OS === "web" ? 16 : moderateScale(16),
      color: Colors[theme].grey500,
      marginTop: Platform.OS === "web" ? 15 : verticalScale(15),
    },
    bottomView: {
      paddingHorizontal: Platform.OS === "web" ? 20 : horizontalScale(20),
    },
    continueButton: {
      backgroundColor: Colors[theme].blue,
      width: '100%',
      marginVertical: Platform.OS === "web" ? 10 : verticalScale(10),
      height: Platform.OS === "web" ? 45 : verticalScale(45),
      borderRadius: Platform.OS === "web" ? 20 : moderateScale(20),
    },
    cityParent: {
      flexDirection: 'row',
    },
    card: {
      backgroundColor: Colors[theme].white,
      borderRadius: Platform.OS === "web" ? 15 : moderateScale(15),
      paddingHorizontal: Platform.OS === "web" ? 8 : horizontalScale(8),
      marginVertical: Platform.OS === "web" ? 8 : verticalScale(8),
      paddingVertical: Platform.OS === "web" ? 10 : verticalScale(10),
    },
    cardHeader: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    cardHeaderIconParent: {
      height: Platform.OS === "web" ? 40 : moderateScale(40),
      width: Platform.OS === "web" ? 40 : moderateScale(40),
      margin: Platform.OS === "web" ? 10 : moderateScale(10),
    },
    cardHeaderIcon: {
      height: '100%',
      width: '100%',
    },
    customIconSize: {
      height: Platform.OS === "web" ? 20 : moderateScale(20),
      width: Platform.OS === "web" ? 20 : horizontalScale(20),
    },
    cardItems: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: Platform.OS === "web" ? 8 : verticalScale(8),
    },
    cardItemTitle: {
      fontFamily: Fonts.regular,
      color: Colors[theme].grey500,
    },
    divider: {
      width: '100%',
      height: Platform.OS === "web" ? .5 : verticalScale(0.5),
      backgroundColor: Colors[theme].grey500,
    },
    cardTitle: {
      fontSize: Platform.OS === "web" ? 15 : moderateScale(15),
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
      height: Platform.OS === "web" ? 45 : verticalScale(45),
      backgroundColor: Colors[theme].blue,
      width: '100%',
      marginVertical: Platform.OS === "web" ? 12 : verticalScale(12),
      borderRadius: Platform.OS === "web" ? 40 : moderateScale(40),
    },
    buttonTitle: {
      fontFamily: Fonts.bold,
      fontSize: Platform.OS === "web" ? 18 : moderateScale(18),
    },
    cardContainer: {
      width: "98%",
      alignSelf: "center",
      backgroundColor: 'white',
      borderRadius: Platform.OS === "web" ? 15 : moderateScale(15),
      padding: Platform.OS === "web" ? 12 : horizontalScale(12),
      marginTop: Platform.OS === "web" ? 20 : moderateScale(20),
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      // marginHorizontal:50,
      elevation: 5,
      marginBottom: 5
    },
    cardTTxt: {
      fontSize: Platform.OS === "web" ? 14 : moderateScale(14),
      color: "black",
      fontFamily: Fonts.medium
    },
    row: {
      marginTop: Platform.OS === "web" ? 10 : moderateScale(10),
      flexDirection: "row"
    },
    cardFirst: {
      width: "85%",
      flexDirection: "row",
      alignItems: "center"
    },
    cardImg: {
      height: Platform.OS === "web" ? 50 : verticalScale(50),
      width: Platform.OS === "web" ? 50 : verticalScale(50),
      borderRadius: Platform.OS === "web" ? 50 : verticalScale(50),
      backgroundColor: Colors[theme].lightYellow,
      justifyContent: "center",
      alignItems: "center"
    },
    img: { height: Platform.OS === "web" ? 20 : verticalScale(20), width: Platform.OS === "web" ? 30 : verticalScale(30) },
    txt: {
      fontSize: Platform.OS === "web" ? 14 : moderateScale(14),
      color: Colors[theme].black,
      fontFamily: Fonts.medium
    },
    txt2: {
      fontSize: Platform.OS === "web" ? 11 : moderateScale(11),
      color: Colors[theme].grey600,
      fontFamily: Fonts.regular
    },
    cardSecond: {
      width: "15%",
      justifyContent: "center",
      alignItems: "center"
    },
    sTxt: {
      fontSize: Platform.OS === "web" ? 14 : moderateScale(14),
      color: Colors[theme].emerald,
      fontFamily: Fonts.bold
    },
    sCard: {
      // flexDirection: "row",
      // alignItems: "center",  
      justifyContent: "space-between",
      marginTop: Platform.OS === "web" ? 15 : moderateScale(15)
    },
    oTxt: {
      fontSize: Platform.OS === "web" ? 16 : moderateScale(16),
      color: Colors[theme].black,
      fontFamily: Fonts.medium
    },
    oTxt2: {
      fontSize: Platform.OS === "web" ? 11 : moderateScale(11),
      color: Colors[theme].black,
      fontFamily: Fonts.regular
    },
    touch: {
      height: Platform.OS === "web" ? 40 : moderateScale(40),
      width: "34%",
      backgroundColor: Colors[theme].blue,
      borderRadius: Platform.OS === "web" ? 40 : moderateScale(40),
      marginTop: Platform.OS === "web" ? 15 : moderateScale(15),
      justifyContent: "center",
      alignItems: "center"
    },
    touchTxt: {
      fontSize: Platform.OS === "web" ? 14 : moderateScale(14),
      color: Colors[theme].white,
      fontFamily: Fonts.regular
    }
  });

export default styling;