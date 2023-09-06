import {StyleSheet} from 'react-native';
import Colors from './Colors';
import { Fonts } from '../assets';

const styling = theme =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: Colors[theme].white,
    },
    activityHeaderStyle: {
      backgroundColor:Colors[theme].screenBackground,
    },
    activityTabLable: {
      fontFamily:Fonts.regular
    },
  });

export default styling;
