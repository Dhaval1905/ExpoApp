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
      alignItems: 'center',
      justifyContent: 'center',
      padding: Platform.OS === "web" ? 10 : horizontalScale(10),
    },
    container: {
      // justifyContent:'center'
    },
    top: {
      // flexDirection: 'row',
      // overflow: 'hidden',
    },
    bottom: {
      flexDirection: 'row',
      marginTop: Platform.OS === "web" ? 10 : 10
    },
    leftParent: {
      alignItems: 'center',
      justifyContent: 'center',
      height: Platform.OS === "web" ? 60 : horizontalScale(60),
      width: Platform.OS === "web" ? 60 : horizontalScale(60),
      borderRadius: Platform.OS === "web" ? 80 : horizontalScale(80),
      alignSelf: 'center'
    },
    icon: {
      height: Platform.OS === "web" ? 30 : moderateScale(30),
      width: Platform.OS === "web" ? 30 : moderateScale(30),
    },
    detailParent: {
    },
    title: {
      color: Colors[theme].black,
      fontSize: Platform.OS === "web" ? 16 : moderateScale(16),
      fontFamily: Fonts.medium,
      alignSelf: 'center'
    },
    subTitle: {
      color: Colors[theme].black,
      fontFamily: Fonts.regular,
      alignSelf: 'center'
    },
    tagParent: {
      // height: verticalScale(24),
      backgroundColor: "#F6F6F6",
      paddingHorizontal: Platform.OS === "web" ? 8 : horizontalScale(8),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: Platform.OS === "web" ? 20 : moderateScale(20),
      marginHorizontal: Platform.OS === "web" ? 4 : horizontalScale(4),
    },
    tagOne: {
      fontFamily: Fonts.regular,
      fontSize: 14,
      color: '#6C6C6C'
    },
    tagTwo: {
      fontFamily: Fonts.regular,
      fontSize: 14,
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
    divider: {
      borderWidth: 0.5,
      borderStyle: 'dashed', marginVertical: Platform.OS === "web" ? 20 : horizontalScale(20),
      borderColor: '#000'
    },
    descriptionTitle: {
      color: Colors[theme].black,
      marginVertical: Platform.OS === "web" ? 10 : verticalScale(10),
      fontSize: Platform.OS === "web" ? 16 : moderateScale(16),
      fontFamily: Fonts.medium,
      textAlign: 'center'
    },
    descriptionSubtitle: {
      fontSize: Platform.OS === "web" ? 16 : moderateScale(16),
      marginBottom: Platform.OS === "web" ? 18 : verticalScale(18),
      fontFamily: Fonts.regular,
      textAlign: 'center',
      color: '#999999'
    },
  });

export default styling;
