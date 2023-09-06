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
    screen: {
      flex: 1,
      backgroundColor: Colors[theme]?.screenBackground,
    },
    header: {
      height: verticalScale(50),
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingHorizontal: horizontalScale(20),
    },
    usernameParent: {
      // justifyContent: 'center',
      alignItems: 'center',
      flexDirection:'row',
      marginLeft:horizontalScale(16)
    },
    usernameT: {
      color: "#808080",
      fontFamily: Fonts.regular,
      fontSize: moderateScale(12),
    },
    usernameS: {
      color: Colors[theme].black,
      fontFamily: Fonts.medium,
      fontSize: moderateScale(16),
    },
    routingAccountNumberParent: {
      flexDirection: 'row',
      marginVertical: verticalScale(20),
      marginBottom: verticalScale(20),
      marginHorizontal: horizontalScale(16),
      backgroundColor:Colors[theme].white,
      elevation:2,
      borderRadius:horizontalScale(24),
      padding:horizontalScale(14),
      justifyContent:'space-evenly'
    },
    routingNumberParent: {
      // flex: 0.5,
      borderLeftWidth:0.2,
      paddingLeft:horizontalScale(15)
    },
    accountNumberParent: {
      // flex: 0.8,
      alignItems: 'center',
      flexDirection:'row'
    },
    subTitleParent: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: verticalScale(4),
    },
    subTitle: {
      marginRight: horizontalScale(3),
      fontFamily: Fonts.bold,
      color: Colors[theme]?.black,
      fontSize:13
    },
    routingNumber: {
      color: Colors[theme]?.grey700,
      fontFamily: Fonts.regular,
    },
    accountNumber: {
      color: Colors[theme]?.grey700,
      fontFamily: Fonts.regular,
    },
    cardParent: {
      flexDirection: 'row',
      height: verticalScale(220),
      paddingHorizontal:horizontalScale(14)
    },
    card: {
      flex: 0.5,
      borderRadius: moderateScale(24),
      margin: moderateScale(8),
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardTitle: {
      color: Colors[theme].black,
      fontFamily: Fonts.medium,
      fontSize: moderateScale(15),
      marginVertical: verticalScale(10),
      marginTop:moderateScale(30)
    },
    referParent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: Colors[theme].white,
      padding: moderateScale(15),
      marginHorizontal: horizontalScale(10),
      borderRadius: moderateScale(10),
      marginVertical: verticalScale(10),
    },
    referBusiness: {
      fontFamily: Fonts.bold,
      color: Colors[theme].blue,
      fontSize: moderateScale(16),
    },
    detailText: {
      color:Colors[theme].white,
      fontSize: moderateScale(20),
      fontFamily: Fonts.medium,
    },
  });

export default styling;
