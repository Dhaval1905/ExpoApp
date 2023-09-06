import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CustomButton, CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {Colors, moderateScale} from '../../theme';
import styling from './ChangePinStyle';

const ChangePinScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  return (
    <View style={styles.screen}>
      <CustomHeader theme={theme} onPressBack={() => navigation.goBack()} />
      <View style={styles.container}>
        <FontAwesome
          name={'credit-card'}
          color={Colors[theme]?.black}
          size={moderateScale(72)}
        />
        <Text style={styles.changeCardPin}>{Strings?.changeCardPin}</Text>
        <Text style={styles.changeCardPinNote}>
          {Strings?.changeCardPinNote}
        </Text>
        <View style={styles.buttonParent}>
          <CustomButton
            theme={theme}
            buttonTitle={Strings.makeCall}
            buttonStyle={styles.buttonStyle}
          />
        </View>
      </View>
    </View>
  );
};

export default ChangePinScreen;
