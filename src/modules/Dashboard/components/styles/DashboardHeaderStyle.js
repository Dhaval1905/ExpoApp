import { StyleSheet } from 'react-native';
import { Fonts } from '../../../../assets';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../theme';

const styling = theme =>
  StyleSheet.create({
    card: {
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    circleView:{
        height:moderateScale(50),
        width:moderateScale(50),
        borderRadius:moderateScale(60),
        backgroundColor:Colors[theme].blue10,
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        fontFamily:Fonts.medium,
        fontSize:18,
        marginLeft:horizontalScale(10),
        color:Colors[theme].black
    },
    helloStyle:{
      fontFamily:Fonts.regular,
        fontSize:14,
        marginLeft:horizontalScale(10),
        color:Colors[theme].black
    },
    detailText: {
      color:Colors[theme].white,
      fontSize: moderateScale(18),
      fontFamily: Fonts.medium,
    },
  });

export default styling;
