import React from 'react';
import {Modal, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {ModalButton} from '../../components';
import {activity, dateRange, lineChartConfig, Strings} from '../../constants';
import {useFinancialData} from '../../hooks';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';
import styling from './FinancialInsightsStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import moment from 'moment';
import {LineChart} from 'react-native-chart-kit';
import {useRoute} from '@react-navigation/native';

const FinancialInsightsScreen = () => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  const chartData = {
    labels: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
    datasets: [
      {
        data: [300, 200, 100, 0, -100, -200, -300],
        color: () => Colors.blue,
        strokeWidth: 2,
      },
    ],
  };

  const {
    visibleActivity,
    visibleDateRange,
    selectedActivity,
    selectedDateRange,
    setVisibleActivity,
    setVisibleDateRange,
    setSelectedActivity,
    setSelectedDateRange,
  } = useFinancialData();
  return (
    <View style={styles.screen}>
      <View style={styles.modalButttonParent}>
        <ModalButton
          theme={theme}
          buttonLable={Strings.activity?.toUpperCase()}
          buttonValue={selectedActivity}
          width={horizontalScale(165)}
          onPressButton={() => setVisibleActivity(true)}
        />
        <ModalButton
          theme={theme}
          buttonLable={Strings.dateRange?.toUpperCase()}
          buttonValue={selectedDateRange}
          width={horizontalScale(165)}
          onPressButton={() => setVisibleDateRange(true)}
        />
      </View>
      <View style={styles.dateParent}>
        <Text style={styles.date}>
          {moment(new Date()).format('MMM DD,YYYY').toString()}
        </Text>
      </View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{Strings.accountCashFlow}</Text>
          <FeatherIcon name={'chevron-right'} size={moderateScale(24)} />
        </View>
        <View style={styles.divider} />
        <View style={styles.chartParent}>
          <LineChart
            data={chartData}
            width={horizontalScale(300)}
            height={verticalScale(200)}
            chartConfig={lineChartConfig(theme)}
            withInnerLines={false}
            withVerticalLines={false}
            withShadow={false}
            getDotColor={() => Colors.blue}
          />
        </View>
        <View style={styles.divider} />
        <View style={styles.cardDetail}>
          <View style={styles.cardDetailItem}>
            <Text style={styles.blackText}>{Strings.income}</Text>
            <Text style={styles.incomeNumber}>{'$0.00'}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardDetailItem}>
            <Text style={styles.blackText}>{Strings.spending}</Text>
            <Text style={styles.blackText}>{'-$0.00'}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardDetailItem}>
            <Text style={styles.blackText}>{Strings.netCashFlow}</Text>
            <Text style={styles.netCashNumber}>{'$0.00'}</Text>
          </View>
        </View>
      </View>
      <Modal visible={visibleActivity} transparent>
        <SafeAreaView style={styles.modalParent}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{Strings.activity}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.modalList}>
              {activity?.map((item, index) => {
                const isSelected = item === selectedActivity;
                return (
                  <View key={index}>
                    <TouchableOpacity
                      style={styles.itemParent}
                      onPress={() => {
                        setSelectedActivity(item);
                        setVisibleActivity(false);
                      }}>
                      <Text
                        style={[
                          styles.modalItem,
                          isSelected && styles.selectedModalItem,
                        ]}>
                        {item}
                      </Text>
                      {isSelected ? (
                        <Icon
                          name="checkmark"
                          size={moderateScale(24)}
                          color={Colors[theme]?.blue}
                        />
                      ) : (
                        <></>
                      )}
                    </TouchableOpacity>
                    <View style={styles.divider} />
                  </View>
                );
              })}
            </View>
          </View>
        </SafeAreaView>
      </Modal>
      <Modal visible={visibleDateRange} transparent>
        <SafeAreaView style={styles.modalParent}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{Strings.dateRange}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.modalList}>
              {dateRange?.map((item, index) => {
                const isSelected = item === selectedDateRange;
                if (index !== 0 && index !== dateRange?.length - 1) {
                  return (
                    <View key={index}>
                      <TouchableOpacity
                        style={styles.itemParent}
                        onPress={() => {
                          setSelectedDateRange(item);
                          setVisibleDateRange(false);
                        }}>
                        <Text
                          style={[
                            styles.modalItem,
                            isSelected && styles.selectedModalItem,
                          ]}>
                          {item}
                        </Text>
                        {isSelected ? (
                          <Icon
                            name="checkmark"
                            size={moderateScale(24)}
                            color={Colors[theme]?.blue}
                          />
                        ) : (
                          <></>
                        )}
                      </TouchableOpacity>
                      <View style={styles.divider} />
                    </View>
                  );
                }
              })}
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default FinancialInsightsScreen;
