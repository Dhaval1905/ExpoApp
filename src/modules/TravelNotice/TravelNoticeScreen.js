import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CustomButton, CustomHeader} from '../../components';
import {navigationStrings, Strings} from '../../constants';
import {Colors, moderateScale} from '../../theme';
import styling from './TravelNoticeStyle';

const TravelNoticeScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  return (
    <View style={styles.screen}>
      <CustomHeader theme={theme} onPressBack={() => navigation.goBack()} />
      <View style={styles.container}>
        <FontAwesome
          name={'map-o'}
          color={Colors[theme]?.black}
          size={moderateScale(72)}
        />
        <Text style={styles.changeCardPin}>{Strings?.useRethinkCardWorld}</Text>
        <Text style={styles.notes}>{Strings?.travelNoticeNOne}</Text>
        <Text style={styles.notes}>{Strings?.travelNoticeNTwo}</Text>
        <View style={styles.buttonParent}>
          <CustomButton
            theme={theme}
            buttonTitle={Strings.createTravelNotice}
            buttonStyle={styles.buttonStyle}
            onBtnPress={() =>
              navigation.navigate(navigationStrings.MAKETRAVELNOTICE)
            }
          />
        </View>
      </View>
    </View>
  );
};

export default TravelNoticeScreen;
