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
    backgroundImageParent: {
      backgroundColor: Colors[theme]?.screenBackground,

      // marginBottom: verticalScale(10),
    },
    backgroundImage: {
      position: 'absolute',
      width: '100%',
      height: verticalScale(210),
      justifyContent: 'flex-end',
    },
    quoteParent: {
      marginTop: verticalScale(60),
      alignItems: 'center',
    },
    quote: {
      color: Colors[theme].white,
      textAlign: 'center',
      fontSize: moderateScale(14),
      fontFamily: Fonts.regular,
    },
    quoteAuthor: {
      color: Colors[theme].white,
      textAlign: 'center',
      fontSize: moderateScale(10),
      fontFamily: Fonts.regular,
    },
    balanceCardParent: {
      width: '100%',
      marginTop: verticalScale(30),
      paddingHorizontal: horizontalScale(15),
    },
    gradient: {
      paddingHorizontal: horizontalScale(14),
      height: verticalScale(100),
      width: '100%',
    },
    cardParent: {
      paddingHorizontal: horizontalScale(15),
    },
    getStartedText: {
      color: Colors[theme].blue,
    },
    rethinkBoostCard: {
      backgroundColor: Colors[theme].black,
    },
    exploreCard: {
      backgroundColor: Colors[theme].blue,
    },
    whiteText: {
      color: Colors[theme].white,
    },
    logoStyle: {
      // tintColor: Colors[theme]?.black,
    },
  });

export default styling;
