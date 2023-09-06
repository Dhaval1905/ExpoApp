import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {CustomButton, CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {Colors, verticalScale} from '../../theme';
import styling from './AddUserRequestStyle';

const AddUserRequestScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.addUserReq}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{Strings.userReqNote}</Text>
          <TextInput
            label={Strings.name?.toUpperCase()}
            mode={'outlined'}
            theme={{roundness:45}}
            style={styles.textInput}
            activeOutlineColor={Colors[theme]?.grey500}
          />
          <TextInput
            label={Strings.email?.toUpperCase()}
            mode={'outlined'}
            theme={{roundness:45}}
            style={[styles.textInput, {marginBottom: verticalScale(10)}]}
            activeOutlineColor={Colors[theme]?.grey500}
          />
          <Text style={styles.useToCommunicate}>
            {Strings.useToCommunicate}
          </Text>
          <TextInput
            label={Strings.relationBusiness?.toUpperCase()}
            mode={'outlined'}
            theme={{roundness:45}}
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

export default AddUserRequestScreen;
