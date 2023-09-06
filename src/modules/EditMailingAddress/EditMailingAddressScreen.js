import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { CustomButton, CustomHeader } from '../../components';
import { Strings } from '../../constants';
import { Colors } from '../../theme';
import styling from './EditMailingAddressStyle';

const EditMailingAddressScreen = ({ navigation }) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const userDetails = useSelector(state => state?.user?.login)
  const [email, setEmail] = useState(userDetails?.data?.businessDetail?.email || '')
  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.editMailingAddress}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{Strings.mailingAddressQuestion}</Text>
          <TextInput
            label={Strings.mailingAddress?.toUpperCase()}
            mode={'outlined'}
            theme={{roundness:45}}
            style={styles.textInput}
            activeOutlineColor={Colors[theme]?.grey500}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          {/* <TextInput
            label={Strings.unitSuite?.toUpperCase()}
            mode={'outlined'}
            style={styles.textInput}
            activeOutlineColor={Colors[theme]?.grey500}
          /> */}
          {/* <View style={styles.cityParent}>
            <TextInput
              label={Strings.city?.toUpperCase()}
              mode={'outlined'}
              style={styles.textInputRows}
              activeOutlineColor={Colors[theme]?.grey500}
            />
            <TextInput
              label={Strings.state?.toUpperCase()}
              mode={'outlined'}
              style={styles.textInputRows}
              activeOutlineColor={Colors[theme]?.grey500}
            />
            <TextInput
              label={Strings.zip?.toUpperCase()}
              mode={'outlined'}
              style={styles.textInputRows}
              activeOutlineColor={Colors[theme]?.grey500}
            />
          </View> */}
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

export default EditMailingAddressScreen;
