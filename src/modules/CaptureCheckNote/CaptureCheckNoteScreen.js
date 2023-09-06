import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import {navigationStrings, Strings} from '../../constants';
import {Colors, moderateScale} from '../../theme';
import styling from './CaptureCheckNoteStyle';

const CaptureCheckNoteScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.captureNoteParent}>
          <Foundation
            name={'arrow-right'}
            size={moderateScale(40)}
            color={Colors[theme]?.red}
          />
          <Text style={styles.captureNote}>{Strings.checkNoteOne}</Text>
        </View>
        <View style={styles.captureNoteParent}>
          <Foundation
            name={'arrow-right'}
            size={moderateScale(40)}
            color={Colors[theme]?.red}
          />
          <Text style={styles.captureNote}>{Strings.checkNoteTwo}</Text>
        </View>
      </View>
      <View style={styles.buttonPanel}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.whiteText}>{Strings.cancelCapture}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(navigationStrings.SCANID);
          }}>
          <Text style={styles.whiteText}>{Strings.continue}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CaptureCheckNoteScreen;
