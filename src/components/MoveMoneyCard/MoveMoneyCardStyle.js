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
    card: {
      flexDirection: 'row',
      backgroundColor: Colors[theme].white,
      borderRadius: Platform.OS === "web" ? 20 : moderateScale(20),
      marginVertical: Platform.OS === "web" ? 10 : verticalScale(10),
      elevation: 4,
      marginTop: Platform.OS === "web" ? 20 : horizontalScale(20),
      marginHorizontal: 2,
      alignItems: 'center',
      padding: Platform.OS === "web" ? 14 : horizontalScale(14)
    },
    container: {
      // flex: 1,
    },
    top: {
      flex: Platform.OS === "web" ? 0.3 : 0.7,
      flexDirection: 'row',
      overflow: 'hidden',
    },
    bottom: {
      flexDirection: 'row',
      marginTop: 10
    },
    leftParent: {
      alignItems: 'center',
      justifyContent: 'center',
      height: Platform.OS === "web" ? 50 : horizontalScale(60),
      width: Platform.OS === "web" ? 50 : horizontalScale(60),
      borderRadius: Platform.OS === "web" ? 120 : horizontalScale(120)
    },
    icon: {
      height: Platform.OS === "web" ? 25 : moderateScale(30),
      width: Platform.OS === "web" ? 25 : moderateScale(30),
    },
    detailParent: {
      // height: '100%',
      // flex: 0.8,
      // paddingTop: verticalScale(15),
    },
    title: {
      color: Colors[theme].black,
      fontSize: Platform.OS === "web" ? 14 : moderateScale(16),
      fontFamily: Fonts.medium,
    },
    subTitle: {
      color: Colors[theme].black,
      fontFamily: Fonts.regular,
      width: '85%'
    },
    tagParent: {
      // height: verticalScale(24),
      backgroundColor: "#F6F6F6",
      paddingHorizontal: horizontalScale(8),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: Platform.OS === "web" ? 20 : moderateScale(20),
      marginHorizontal: horizontalScale(4),
    },
    tagOne: {
      fontFamily: Fonts.regular,
      fontSize: 14
    },
    tagTwo: {
      fontFamily: Fonts.regular,
      fontSize: 14
    },
    rightParent: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '10%',
      right: 0,
      zIndex: 1,
    },
  });

export default styling;
