import { Platform, StyleSheet } from 'react-native';
import Colors from './Colors';
import { Fonts } from '../assets';
import { moderateScale } from './Metrics';

const styling = theme =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: Colors[theme].white,
    },
    activityHeaderStyle: {
      backgroundColor: Colors[theme].screenBackground,
    },
    activityTabLable: {
      fontSize: Platform.OS === "web" ? 14 : moderateScale(14),
      fontFamily: Fonts.regular
    },
  });

export default styling;
