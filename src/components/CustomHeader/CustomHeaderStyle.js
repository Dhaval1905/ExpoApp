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
    defaultHeaderStyle: {
      flexDirection: 'row',
      height: verticalScale(46),
      alignItems: 'center',
      paddingHorizontal: horizontalScale(10),
      // justifyContent:'center',
      width:'100%'
    },
    defaultBackBtnStyle: {
      height: moderateScale(24),
      width: moderateScale(24),
      tintColor: Colors[theme]?.black,
    },
    defaultHeaderTitleStyle: {
      fontSize: moderateScale(20),
      color: Colors[theme].black,
      fontFamily: Fonts.medium,
      alignSelf:'center',
      marginRight:horizontalScale(18)
    },
    centerView:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }
  });

export default styling;
