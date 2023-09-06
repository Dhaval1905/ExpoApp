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
      paddingHorizontal: horizontalScale(14),
    },
    modalButttonParent: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: verticalScale(20),
    },
    dateParent: {
      marginHorizontal: horizontalScale(6),
      marginVertical: verticalScale(20),
    },
    date: {
      color: Colors[theme].black,
      fontFamily: Fonts.bold,
    },
    chartParent: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: verticalScale(20),
    },
    card: {
      backgroundColor: Colors[theme].white,
      borderRadius: moderateScale(10),
      marginHorizontal: horizontalScale(10),
    },
    cardHeader: {
      flexDirection: 'row',
      paddingHorizontal: horizontalScale(10),
      marginVertical: verticalScale(15),
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cardTitle: {
      color: Colors[theme].black,
      fontFamily: Fonts.regular,
    },
    cardDetail: {
      marginHorizontal: horizontalScale(10),
    },
    cardDetailItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: verticalScale(10),
    },
    incomeNumber: {
      color: Colors[theme].emerald,
      fontFamily: Fonts.regular,
    },
    blackText: {
      color: Colors[theme].black,
      fontFamily: Fonts.regular,
    },
    netCashNumber: {
      color: Colors[theme].blue,
      fontFamily: Fonts.regular,
    },
    modalParent: {
      flex: 1,
      backgroundColor: Colors[theme].black50,
      justifyContent: 'flex-end',
    },
    modalContainer: {
      backgroundColor: Colors[theme].white,
      borderTopRightRadius: moderateScale(10),
      borderTopLeftRadius: moderateScale(10),
    },
    modalHeader: {
      marginVertical: verticalScale(20),
      marginHorizontal: horizontalScale(20),
    },
    modalTitle: {
      color: Colors[theme].black,
      fontSize: moderateScale(24),
      fontFamily: Fonts.bold,
    },
    divider: {
      backgroundColor: Colors[theme].grey400,
      height: verticalScale(2),
    },
    modalList: {
      marginHorizontal: horizontalScale(14),
    },
    itemParent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: verticalScale(15),
      alignItems: 'center',
    },
    modalItem: {
      color: Colors[theme].black,
      fontSize: moderateScale(14),
    },
    selectedModalItem: {
      color: Colors[theme].blue,
      fontFamily: Fonts.bold,
    },
  });

export default styling;
