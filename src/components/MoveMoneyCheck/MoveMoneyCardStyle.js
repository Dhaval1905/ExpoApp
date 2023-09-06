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
      alignItems:'center',
      justifyContent:'center',
      padding:horizontalScale(10),
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
      marginTop:10
    },
    leftParent: {
      alignItems: 'center',
      justifyContent:'center',
      height:horizontalScale(60),
      width:horizontalScale(60),
      borderRadius:horizontalScale(80),
      alignSelf:'center'
    },
    icon: {
      height: moderateScale(30),
      width: moderateScale(30),
    },
    detailParent: {
    },
    title: {
      color: Colors[theme].black,
      fontSize: moderateScale(16),
      fontFamily: Fonts.medium,
      alignSelf:'center'
    },
    subTitle: {
      color: Colors[theme].black,
      fontFamily: Fonts.regular,
      alignSelf:'center'
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
      fontSize:14,
      color:'#6C6C6C'
    },
    tagTwo: {
      fontFamily: Fonts.regular,
      fontSize:14,
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
  borderWidth:0.5,
  borderStyle:'dashed',marginVertical:horizontalScale(20),
  borderColor:'#000'
    },
    descriptionTitle: {
      color: Colors[theme].black,
      marginVertical: verticalScale(10),
      fontSize: moderateScale(16),
      fontFamily: Fonts.medium,
      textAlign:'center'
    },
    descriptionSubtitle: {
      fontSize: moderateScale(16),
      marginBottom: verticalScale(18),
      fontFamily: Fonts.regular,
      textAlign:'center',
      color:'#999999'
    },
  });

export default styling;
