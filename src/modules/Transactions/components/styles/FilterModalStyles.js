import {StyleSheet} from 'react-native';
import {Fonts} from '../../../../assets';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../theme';

const styling = theme =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: Colors[theme].screenBackground,
    },
    scrollView: {
      flex: 1,
      marginBottom: verticalScale(70),
    },
    container: {
      marginTop: verticalScale(10),
      marginHorizontal: horizontalScale(15),
    },
    card: {
      backgroundColor: Colors[theme].white,
      padding: horizontalScale(16),
      borderRadius: moderateScale(24),
      marginVertical: verticalScale(10),
      elevation:2
    },
    cardHeader: {
      height: verticalScale(40),
      justifyContent: 'center',
    },
    cardHeaderText: {
      color: Colors[theme].black,
      fontSize: moderateScale(14),
      fontFamily: Fonts.medium,
    },
    datePickerParent: {
      flexDirection: 'row',
      marginBottom: verticalScale(20),
    },
    trasactionTypeParent: {
      marginVertical: verticalScale(10),
    },
    trasactionTypeHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    trasactionTypeHeaderTitle: {
      color: Colors[theme].black,
      fontSize: moderateScale(14),
      fontFamily: Fonts.bold,
    },
    selectAll: {
      color: Colors[theme].blue,
      fontFamily: Fonts.bold,
    },
    typesParent: {
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: verticalScale(10),
    },
    typeButtonText: {
      color: Colors[theme].black,
    },
    typeButton: {
      backgroundColor: Colors[theme].white,
      height: verticalScale(50),
      margin: moderateScale(4),
      borderColor: Colors[theme].grey300,
      borderWidth: 2,
      borderRadius: moderateScale(6),
    },
    selectedTypeButton: {
      backgroundColor: Colors[theme].black,
      borderWidth: 0,
    },
    applyFilterParent: {
      position: 'absolute',
      bottom: 0,
      height: verticalScale(70),
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors[theme].white,
      paddingHorizontal: horizontalScale(14),
    },
    applyFilterButton: {
      height: verticalScale(40),
      borderRadius: moderateScale(20),
      backgroundColor: Colors[theme].blue,
    },
    applyFilter: {
      color: Colors[theme].white,
      fontSize: moderateScale(14),
      fontFamily: Fonts.medium,
    },
    whiteText: {
      color: Colors[theme].white,
    },
    dateRangePicker: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      justifyContent: 'flex-end',
      backgroundColor: Colors[theme].black50,
    },
    dateRangePickerContainer: {
      backgroundColor: Colors[theme].white,
      paddingVertical: verticalScale(10),
    },
    dateRangePickerHeader: {
      color: Colors[theme].black,
      fontSize: moderateScale(22),
      fontFamily: Fonts.bold,
      marginLeft: horizontalScale(18),
      marginBottom: verticalScale(10),
    },
    divider: {
      height: verticalScale(2),
      width: '100%',
      backgroundColor: Colors[theme].grey300,
    },
    dateRangeDetailParent: {
      marginHorizontal: horizontalScale(14),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    dateRangeDetail: {
      color: Colors[theme].black,
      fontSize: moderateScale(16),
      marginVertical: verticalScale(16),
    },
    selectedDateRange: {
      color: Colors[theme].blue,
    },
    searchBarPanel: {
      margin: moderateScale(10),
    },
    searchBarParent: {
      width: '100%',
      flexDirection: 'row',
      height: verticalScale(45),
      marginRight: horizontalScale(50),
      backgroundColor:
        theme === 'dark'
          ? Colors[theme]?.screenBackground
          : Colors[theme].grey300,
    },
    searchRightIcon: {
      flex: 0.15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    categoryDetail: {
      marginTop: verticalScale(20),
      marginHorizontal: horizontalScale(15),
    },
    categoryDetailTitle: {
      color: Colors[theme].black,
      fontSize: moderateScale(10),
      fontFamily: Fonts.bold,
    },
  });

export default styling;
