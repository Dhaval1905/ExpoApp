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
      paddingHorizontal: horizontalScale(14),
      backgroundColor: Colors[theme]?.screenBackground,
    },
    container: {
      flex: 1,
      marginTop: 15
      // justifyContent: 'center',
    },
    choosePayMethod: {
      fontFamily: Fonts.medium,
      fontSize: moderateScale(12),
      color:'#808080'
    },
    card: {
      width: '100%',
      flexDirection: 'row',
      height: verticalScale(100),
      backgroundColor: Colors[theme].white,
      marginVertical: verticalScale(10),
      borderRadius: moderateScale(15),
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
      color:Colors[theme].white,
      fontSize: moderateScale(18),
      fontFamily: Fonts.medium,
    },
    detailText1: {
      color: Colors[theme].black,
      fontSize: moderateScale(14),
      fontFamily: Fonts.medium,
      marginLeft:horizontalScale(10)
    },
    rightParent: {
      // flex: 0.1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginBtn: {
      height: verticalScale(70),
      backgroundColor: Colors[theme].blue,
      borderRadius: moderateScale(40),
      marginTop: verticalScale(30),
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      marginBottom:35,
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
      fontSize: moderateScale(18),
    },
  })

export default styling;
