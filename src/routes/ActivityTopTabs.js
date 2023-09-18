import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Platform, Text, View } from 'react-native';
import { CustomHeader } from '../components';
import { navigationStrings } from '../constants';
// import { FinancialInsights, Transactions, Transactions1 } from '../modules';
import { FinancialInsights } from "../modules/FinancialInsights"
import { Transactions } from "../modules/Transactions"
import { Transactions1 } from "../modules/Transactions1"
import { Colors, horizontalScale, styling } from '../theme';
import { useDispatch } from 'react-redux';
import { changeDashboard } from '../redux/actions/initial';

const Tab = createMaterialTopTabNavigator();

const ActivityTopTabs = ({ navigation }) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const dispatch = useDispatch()
  useEffect(() => {
    (async () => {
      const unsubscribe = navigation.addListener('focus', async () => {

        await dispatch(changeDashboard(false))
      });
      return unsubscribe;
    })();
  }, [])

  const styles = styling(theme);

  return (
    <View style={{ backgroundColor: Colors[theme]?.white, flex: 1 }}>
      <View style={{ marginTop: Platform.OS === "web" ? 10 : 0 }} />
      <CustomHeader
        theme={theme}
        backButton={false}
        headerTitle={"Transaction Activity"}
        headerStyle={styles.activityHeaderStyle}
      />
      <View style={{ marginBottom: Platform.OS === "web" ? 10 : 0 }} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarLabel: ({ focused }) => {
            if (route.name === navigationStrings.TRANSACTIONS) {
              return (
                <Text style={[styles.activityTabLable, { color: focused ? 'white' : 'black' }]}>
                  {"Pending"}
                </Text>
              );
            } else if (route.name === navigationStrings.FINANCIALINSIGHTS) {
              return (
                <Text style={[styles.activityTabLable, { color: focused ? 'white' : 'black' }]}>
                  {"Completed"}
                </Text>
              );
            }
          },
          tabBarStyle: {
            // backgroundColor: Colors[theme]?.white,
            borderRadius: horizontalScale(24),
            width: '93%',
            alignSelf: 'center',
            // elevation:5
          },
          tabBarIndicatorStyle: {
            height: Platform.OS === "web" ? 40 : 48,
            borderRadius: horizontalScale(24),
            backgroundColor: Colors[theme].blue,
          },
        })}>
        <Tab.Screen
          name={navigationStrings.TRANSACTIONS}
          component={Transactions}
          initialParams={{ theme: theme }}
        />
        <Tab.Screen
          name={navigationStrings.FINANCIALINSIGHTS}
          component={Transactions1}
          initialParams={{ theme: theme }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default ActivityTopTabs;
