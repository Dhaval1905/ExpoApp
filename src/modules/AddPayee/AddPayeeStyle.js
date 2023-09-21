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
      paddingHorizontal: Platform.OS === "web" ? 14 : horizontalScale(14),
      backgroundColor: Colors[theme]?.screenBackground,
    },
    container: {
      flex: 1,
      marginTop: 15
      // justifyContent: 'center',
    },
    choosePayMethod: {
      fontFamily: Fonts.medium,
      fontSize: Platform.OS === "web" ? 12 : moderateScale(12),
      color: '#808080'
    },
    card: {
      width: '100%',
      flexDirection: 'row',
      height: verticalScale(100),
      backgroundColor: Colors[theme].white,
      marginVertical: Platform.OS === "web" ? 10 : verticalScale(10),
      borderRadius: Platform.OS === "web" ? 15 : moderateScale(15),
    },
    leftParent: {
      flex: 0.2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    detailParent: {
      // flex: 0.7,
      // justifyContent: 'center',
    },
    detailText: {
      color: Colors[theme].white,
      fontSize: Platform.OS === "web" ? 18 : moderateScale(18),
      fontFamily: Fonts.medium,
    },
    detailText1: {
      color: Colors[theme].black,
      fontSize: Platform.OS === "web" ? 14 : moderateScale(14),
      fontFamily: Fonts.medium,
      marginLeft: Platform.OS === "web" ? 10 : horizontalScale(10)
    },
    rightParent: {
      // flex: 0.1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginBtn: {
      height: Platform.OS === "web" ? 50 : verticalScale(70),
      width: Platform.OS === "web" ? "40%" : "100%",
      backgroundColor: Colors[theme].blue,
      borderRadius: Platform.OS === "web" ? 40 : moderateScale(40),
      marginTop: Platform.OS === "web" ? 30 : verticalScale(30),
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: "center",
      justifyContent: 'center',
      marginBottom: 35,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 1,
      shadowRadius: 4,
      elevation: 5
    },
    loginText: {
      fontSize: Platform.OS === "web" ? 18 : moderateScale(18),
    },
  })

export default styling;
