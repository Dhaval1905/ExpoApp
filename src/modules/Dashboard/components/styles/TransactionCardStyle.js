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
      // width: '100%',
      backgroundColor: Colors[theme].white,
      marginVertical: verticalScale(10),
      borderRadius: moderateScale(24),
      paddingHorizontal: horizontalScale(8),
      overflow: 'hidden',
      flex: 1,
      elevation:4
    },
    cardHeader: {
      width: '100%',
      height: verticalScale(60),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: horizontalScale(12)
    },
    headerTitle: {
      color: Colors[theme].black,
      fontSize: moderateScale(18),
      fontFamily: Fonts.bold,
    },
    divider: {
      backgroundColor: Colors[theme].grey300,
      width: '100%',
      height: verticalScale(3),
    },
    testStyle:{
      fontSize:horizontalScale(13),
      fontFamily:Fonts.medium,
      color:Colors[theme]?.black
    },
    testStyle1:{
      fontSize:horizontalScale(13),
      fontFamily:Fonts.medium,
    },
    textStyle:{
      fontSize:horizontalScale(14),
      fontFamily:Fonts.regular,
      color:'#000'
    },
    smallText:{
      fontSize:horizontalScale(11),
      fontFamily:Fonts.regular,
      color:"#848484"
    }
  });

export default styling;
