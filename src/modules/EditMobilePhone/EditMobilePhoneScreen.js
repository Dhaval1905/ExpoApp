import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { CustomButton, CustomHeader } from '../../components';
import { Strings } from '../../constants';
import { Colors } from '../../theme';
import styling from './EditMobilePhoneStyle';

const EditMobilePhoneScreen = ({ navigation }) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const userDetails = useSelector(state => state?.user?.login)
  const [phone, setPhone] = useState(userDetails?.data?.personDetail?.[0]?.phone_number || '')
  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.editMobilePhone}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{Strings.editPhoneQuestion}</Text>
          <TextInput
            label={Strings.editMobilePhone?.toUpperCase()}
            mode={'outlined'}
            theme={{roundness:45}}
            style={styles.textInput}
            activeOutlineColor={Colors[theme]?.grey500}
            value={phone} onChangeText={(text) => setPhone(text)}
          />
        </View>
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.editEmailNote}>{Strings.editMobilePhoneNote}</Text>
        <CustomButton
          theme={theme}
          buttonTitle={Strings.submit}
          buttonStyle={styles.submitButton}
        />
      </View>
    </View>
  );
};

export default EditMobilePhoneScreen;
