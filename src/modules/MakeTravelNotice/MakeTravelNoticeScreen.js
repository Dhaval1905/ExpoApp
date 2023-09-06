import {useRoute} from '@react-navigation/native';
import moment from 'moment';
import React, {useState} from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import {CustomButton, CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {moderateScale, verticalScale} from '../../theme';
import styling from './MakeTravelNoticeStyle';

const MakeTravelNoticeScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [isFromDate, setIsFromDate] = useState(false);
  const [open, setOpen] = useState(false);
  const [countryModal, setCountryModal] = useState(false);

  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.travelNotice}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{Strings.makeTravelNoticeNote}</Text>
          <Text
            style={[
              styles.textInput,
              {
                marginBottom: verticalScale(35),
                paddingBottom: verticalScale(10),
              },
            ]}
            onPress={() => {
              setCountryModal(true);
            }}>
            {Strings.country?.toUpperCase()}
          </Text>
          <View style={styles.fromToParent}>
            <Text
              style={[
                styles.textInput,
                {flex: 0.45, paddingBottom: verticalScale(10)},
              ]}
              onPress={() => {
                setIsFromDate(true);
                setOpen(true);
              }}>
              {fromDate === '' ? Strings.from?.toUpperCase() : fromDate}
            </Text>
            <Text
              style={[
                styles.textInput,
                {flex: 0.45, paddingBottom: verticalScale(10)},
              ]}
              onPress={() => {
                setOpen(true);
              }}>
              {toDate === '' ? Strings.to?.toUpperCase() : toDate}
            </Text>
          </View>
        </View>
        <CustomButton
          theme={theme}
          buttonTitle={Strings.submit}
          buttonStyle={styles.buttonStyle}
        />
      </View>
      <DatePicker
        modal
        open={open}
        mode={'date'}
        date={new Date()}
        onConfirm={date => {
          const finalDate = moment(date)?.format('MMM DD,YYYY')?.toString();
          isFromDate ? setFromDate(finalDate) : setToDate(finalDate);
          setIsFromDate(false);
          setOpen(false);
        }}
        onCancel={() => {
          setIsFromDate(false);
          setOpen(false);
        }}
      />
      <Modal visible={countryModal}>
        <SafeAreaView style={styles.modalParent}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{Strings.chooseCountry}</Text>
            <View style={styles.searchBarParent}>
              <View style={styles.searchRightIcon}>
                <FontistoIcon name="search" size={moderateScale(18)} />
              </View>
              <View style={styles.searchBar}>
                <TextInput placeholder={'Search'} />
              </View>
            </View>
            <View style={styles.countryList}>
              <TouchableOpacity
                style={styles.countryParent}
                onPress={() => setCountryModal(false)}>
                <View style={styles.countryFlag}>
                  <Image
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                    source={{
                      uri: 'https://icons.iconarchive.com/icons/wikipedia/flags/1024/IN-India-Flag-icon.png',
                    }}
                  />
                </View>
                <Text style={styles.countryName}>{'India'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default MakeTravelNoticeScreen;
