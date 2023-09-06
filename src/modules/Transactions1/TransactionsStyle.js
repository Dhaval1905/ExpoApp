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
      paddingHorizontal: horizontalScale(13),
    },
    searchPanel: {
      flexDirection: 'row',
      marginVertical: verticalScale(20),
      alignItems:'center',
      width:'100%',
      justifyContent:'center'
    },
    searchBarParent: {
      flexDirection: 'row',
      height: verticalScale(45),
      flex:1,
      backgroundColor: Colors[theme].white,
      elevation: 5,
      marginLeft:1,
      alignItems:'center'
    },
    filterParent: {
      // flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft:10
    },
    searchRightIcon: {
      flex: 0.15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchBar: {
      flex: 0.7,
      paddingLeft: horizontalScale(8),
    },
    searchLeftIcon: {
      flex: 0.15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    testStyle:{
      fontSize:horizontalScale(14),
      fontFamily:Fonts.medium,
      color:Colors[theme]?.black
    },
    testStyle1:{
      fontSize:horizontalScale(14),
      fontFamily:Fonts.medium,
    },
    textStyle:{
      fontSize:horizontalScale(14),
      fontFamily:Fonts.regular
    },
    smallText:{
      fontSize:horizontalScale(11),
      fontFamily:Fonts.regular,
      color:'#848484'
    }
  });

export default styling;
