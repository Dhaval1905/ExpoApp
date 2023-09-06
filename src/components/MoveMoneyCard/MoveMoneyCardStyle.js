import {StyleSheet} from 'react-native';
import {Fonts} from '../../assets';
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
      borderRadius: moderateScale(20),
      marginVertical: verticalScale(10),
      elevation:4,
      marginTop:horizontalScale(20),
      marginHorizontal:2,
      alignItems:'center',
      padding:horizontalScale(14)
    },
    container: {
      // flex: 1,
    },
    top: {
      flex: 0.7,
      flexDirection: 'row',
      overflow: 'hidden',
    },
    bottom: {
      flexDirection: 'row',
      marginTop:10
    },
    leftParent: {
      alignItems: 'center',
      justifyContent:'center',
      height:horizontalScale(60),
      width:horizontalScale(60),
      borderRadius:horizontalScale(120)
    },
    icon: {
      height: moderateScale(30),
      width: moderateScale(30),
    },
    detailParent: {
      // height: '100%',
      // flex: 0.8,
      // paddingTop: verticalScale(15),
    },
    title: {
      color: Colors[theme].black,
      fontSize: moderateScale(16),
      fontFamily: Fonts.medium,
    },
    subTitle: {
      color: Colors[theme].black,
      fontFamily: Fonts.regular,
      width:'85%'
    },
    tagParent: {
      // height: verticalScale(24),
      backgroundColor: "#F6F6F6",
      paddingHorizontal: horizontalScale(8),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: moderateScale(20),
      marginHorizontal: horizontalScale(4),
    },
    tagOne: {
      fontFamily: Fonts.regular,
      fontSize:14
    },
    tagTwo: {
      fontFamily: Fonts.regular,
      fontSize:14
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
