import { Platform, StyleSheet } from 'react-native';
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
      paddingHorizontal: Platform.OS === "web" ? 13 : horizontalScale(13),
    },
    searchPanel: {
      flexDirection: 'row',
      marginVertical: Platform.OS === "web" ? 20 : verticalScale(20),
      alignItems: 'center',
      width: '100%',
      justifyContent: 'center'
    },
    searchBarParent: {
      flexDirection: 'row',
      height: Platform.OS === "web" ? 35 : verticalScale(45),
      flex: 1,
      backgroundColor: Colors[theme].white,
      elevation: 5,
      marginLeft: 1,
      alignItems: 'center'
    },
    filterParent: {
      // flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 10
    },
    searchRightIcon: {
      flex: Platform.OS === "web" ? 0.05 : 0.15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchBar: {
      flex: 0.7,
      paddingLeft: Platform.OS === "web" ? 5 : horizontalScale(8),
    },
    searchLeftIcon: {
      flex: 0.15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    testStyle: {
      fontSize: Platform.OS === "web" ? 13 : horizontalScale(13),
      fontFamily: Fonts.medium,
      color: Colors[theme]?.black
    },
    testStyle1: {
      fontSize: Platform.OS === "web" ? 13 : horizontalScale(13),
      fontFamily: Fonts.medium,
    },
    textStyle: {
      fontSize: Platform.OS === "web" ? 16 : horizontalScale(14),
      fontFamily: Fonts.regular,
      color: '#000'
    },
    smallText: {
      fontSize: Platform.OS === "web" ? 11 : horizontalScale(11),
      fontFamily: Fonts.regular,
      color: "#848484"
    }
  });

export default styling;
