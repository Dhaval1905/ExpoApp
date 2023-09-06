import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { CustomButton, CustomHeader } from '../../components';
import { Strings } from '../../constants';
import { Colors } from '../../theme';
import styling from './EditBusinessPhoneStyle';

const EditMobilePhoneScreen = ({ navigation }) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const userDetails = useSelector(state => state?.user?.login)
  const [phone, setPhone] = useState(userDetails?.data?.businessDetail?.phone_number || '')
  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.editBusinessphone}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{Strings.businessPhoneQuestion}</Text>
          <TextInput
            label={Strings.businessPhone?.toUpperCase()}
            mode={'outlined'}
            theme={{roundness:45}}
            style={styles.textInput}
            activeOutlineColor={Colors[theme]?.grey500}
            value={phone} onChangeText={(text) => setPhone(text)}
          />
        </View>
      </View>
      <View style={styles.bottomView}>
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
