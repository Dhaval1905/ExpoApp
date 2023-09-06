import React from 'react';
import {Text, View} from 'react-native';
import {Strings} from '../../../constants/Strings';
import styling from './styles/ActivationCardStyle';

//Note: pass the progress value in 0 to 1 range (eg. 10% = 0.1)
const ActivationCard = ({progress = 0, theme}) => {
  const styles = styling(theme);

  return (
    <View style={styles.card}>
      <View style={styles.titleParent}>
        <Text style={styles.title}>{Strings.activateRethink}</Text>
      </View>
      <View style={styles.progressBarParent}>
        <View style={styles.progressBar}>
          <View style={[styles.innerProgressBar, {flex: progress}]} />
        </View>
      </View>
      <View style={styles.detailParent}>
        <Text style={styles.detail}>{Strings.joinRethink}</Text>
        <Text style={styles.detail}>{Strings.fundAccount}</Text>
        <Text style={styles.detail}>{Strings.gameTime}</Text>
      </View>
    </View>
  );
};

export default ActivationCard;
