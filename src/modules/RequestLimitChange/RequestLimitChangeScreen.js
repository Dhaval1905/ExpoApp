import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Icons} from '../../assets';
import {CustomButton, CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {Colors, horizontalScale, moderateScale} from '../../theme';
import styling from './RequestLimitChangeStyle';

const RequestLimitChangeScreen = ({navigation}) => {
  const [limitChange, setLimitChange] = useState();
  const [limitType, setLimitType] = useState();

  const route = useRoute();
  const from = route?.params?.from;
  const theme = route?.params?.theme;
  const styles = styling(theme);

  const TitleCard = () => {
    if (from === 'bankTransferOnly') {
      return (
        <View style={styles.cardHeader}>
          <View style={styles.cardHeaderIconParent}>
            <Image source={Icons.money} style={styles.cardHeaderIcon} />
          </View>
          <View>
            <Text style={styles.cardTitle}>{Strings.bankTransferOnly}</Text>
            <Text style={styles.cardSubtitle}>{Strings.achPush}</Text>
          </View>
        </View>
      );
    } else if (from === 'mailedCheck') {
      return (
        <View style={styles.cardHeader}>
          <View style={styles.cardHeaderIconParent}>
            <Image source={Icons.money} style={styles.cardHeaderIcon} />
          </View>
          <View>
            <Text style={styles.cardTitle}>{Strings.mailedCheck}</Text>
            <Text style={styles.cardSubtitle}>{Strings.mailedCheckNote}</Text>
          </View>
        </View>
      );
    } else if (from === 'checkDeposit') {
      return (
        <View style={styles.cardHeader}>
          <View style={styles.cardHeaderIconParent}>
            <Image source={Icons.money} style={styles.cardHeaderIcon} />
          </View>
          <View>
            <Text style={styles.cardTitle}>{Strings.checkDeposit}</Text>
            <Text style={styles.cardSubtitle}>
              {Strings.depositCheckTakePhoto}
            </Text>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.requestLimitChange}
        onPressBack={() => navigation.goBack()}
      />
      <ScrollView style={styles.container}>
        {TitleCard()}
        <View style={styles.card}>
          <Text style={styles.whichLimit}>{Strings.whichLimit}</Text>
          <View style={styles.cardItemParent}>
            <View>
              <Text>{Strings.perTransfer}</Text>
              <Text>{`${Strings.currentLimit} :`}</Text>
            </View>
            <TouchableOpacity
              onPress={() => setLimitChange(Strings.perTransfer)}>
              <MaterialCommunityIcons
                name={
                  limitChange === Strings.perTransfer
                    ? 'check-circle-outline'
                    : 'checkbox-blank-circle-outline'
                }
                size={moderateScale(24)}
                color={Colors[theme]?.blue}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItemParent}>
            <View>
              <Text>{Strings.perDay}</Text>
              <Text>{`${Strings.currentLimit} :`}</Text>
            </View>
            <TouchableOpacity onPress={() => setLimitChange(Strings.perDay)}>
              <MaterialCommunityIcons
                name={
                  limitChange === Strings.perDay
                    ? 'check-circle-outline'
                    : 'checkbox-blank-circle-outline'
                }
                size={moderateScale(24)}
                color={Colors[theme]?.blue}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItemParent}>
            <View>
              <Text>{Strings.perMonth}</Text>
              <Text>{`${Strings.currentLimit} :`}</Text>
            </View>
            <TouchableOpacity onPress={() => setLimitChange(Strings.perMonth)}>
              <MaterialCommunityIcons
                name={
                  limitChange === Strings.perMonth
                    ? 'check-circle-outline'
                    : 'checkbox-blank-circle-outline'
                }
                size={moderateScale(24)}
                color={Colors[theme]?.blue}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.whatLimit}>{Strings.whatLimit}</Text>
          <TextInput
            label={Strings.amount?.toUpperCase()}
            mode={'outlined'}
            style={styles.textInput}
            activeOutlineColor={Colors[theme]?.grey500}
          />
        </View>
        <View style={styles.card}>
          <Text style={styles.whatLimit}>{Strings.changeReqDescription}</Text>
          <TextInput
            label={Strings.briefDescription?.toUpperCase()}
            mode={'outlined'}
            style={styles.textInput}
            activeOutlineColor={Colors[theme]?.grey500}
          />
        </View>
        <View style={styles.card}>
          <Text style={styles.whatLimit}>
            {Strings.changeLimitPermanentTemp}
          </Text>
          <View style={styles.cardItemParent}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.temporary}>{Strings.temporary}</Text>
              <MaterialCommunityIcons
                name={'information-outline'}
                size={moderateScale(26)}
                color={Colors[theme]?.blue}
              />
            </View>
            <TouchableOpacity onPress={() => setLimitType(Strings.temporary)}>
              <MaterialCommunityIcons
                name={
                  limitType === Strings.temporary
                    ? 'check-circle-outline'
                    : 'checkbox-blank-circle-outline'
                }
                size={moderateScale(24)}
                color={Colors[theme]?.blue}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItemParent}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.permanent}>{Strings.permanent}</Text>
            </View>
            <TouchableOpacity onPress={() => setLimitType(Strings.permanent)}>
              <MaterialCommunityIcons
                name={
                  limitType === Strings.permanent
                    ? 'check-circle-outline'
                    : 'checkbox-blank-circle-outline'
                }
                size={moderateScale(24)}
                color={Colors[theme]?.blue}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.requestLimitNOne}>{Strings.requestLimitNOne}</Text>
        <Text style={styles.requestLimitNTwo}>{Strings.requestLimitNTwo}</Text>
        <View style={[styles.card, {padding: moderateScale(8)}]}>
          <View style={styles.cardItemParent}>
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons
                name={'file-document-outline'}
                color={Colors[theme]?.black}
                size={moderateScale(32)}
              />
              <Text style={styles.documentationOptional}>
                {Strings.documentationOptional}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: horizontalScale(120),
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name={'google-drive'}
                  color={Colors[theme]?.black}
                  size={moderateScale(32)}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name={'dropbox'}
                  color={Colors[theme]?.black}
                  size={moderateScale(32)}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name={'plus-circle-outline'}
                  color={Colors[theme]?.black}
                  size={moderateScale(32)}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.requestLimitDisclaimer}>
          {Strings.requestLimitDisclaimer}
        </Text>
        <CustomButton
          theme={theme}
          buttonTitle={Strings.submitRequest}
          buttonTitleStyle={styles.buttonTitle}
          buttonStyle={styles.buttonStyle}
        />
      </ScrollView>
    </View>
  );
};

export default RequestLimitChangeScreen;
