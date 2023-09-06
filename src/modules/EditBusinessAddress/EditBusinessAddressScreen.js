import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {CustomButton, CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {Colors} from '../../theme';
import styling from './EditBusinessAddressStyle';

const EditBusinessAddressScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.editBusinessAddress}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            {Strings.businessAddressQuestion}
          </Text>
          <TextInput
            label={Strings.businessAddress?.toUpperCase()}
            mode={'outlined'}
            theme={{roundness:45,colors:'#000'}}
            style={styles.textInput}
            activeOutlineColor={Colors[theme]?.grey500}
          />
          <TextInput
            label={Strings.unitSuite?.toUpperCase()}
            mode={'outlined'}
            theme={{roundness:45,colors:'#000'}}
            style={styles.textInput}
            activeOutlineColor={Colors[theme]?.grey500}
          />
            <TextInput
              label={Strings.city?.toUpperCase()}
              mode={'outlined'}
              theme={{roundness:45,colors:'#000'}}
              style={styles.textInput}
              activeOutlineColor={Colors[theme]?.grey500}
            />
            <TextInput
              label={Strings.state?.toUpperCase()}
              mode={'outlined'}
              theme={{roundness:45,colors:'#000'}}
              style={styles.textInput}
              activeOutlineColor={Colors[theme]?.grey500}
            />
            <TextInput
              label={Strings.zip?.toUpperCase()}
              mode={'outlined'}
              theme={{roundness:45,colors:'#000'}}
              style={styles.textInput}
              activeOutlineColor={Colors[theme]?.grey500}
            />
        </View>
      </View>
      <View style={styles.bottomView}>
        <CustomButton
          theme={theme}
          buttonTitle={Strings.continue}
          buttonStyle={styles.continueButton}
        />
      </View>
    </View>
  );
};

export default EditBusinessAddressScreen;
