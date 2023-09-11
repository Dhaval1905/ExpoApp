import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute } from '@react-navigation/native';
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { navigationStrings } from '../constants';
// import {Account, Dashboard, MoveMoney, Settings} from '../modules';
import { Account } from "../modules/Account"
import { Dashboard } from "../modules/Dashboard"
import { MoveMoney } from "../modules/MoveMoney"
import { Settings } from "../modules/Settings"
import { Colors } from '../theme';
import ActivityTopTabs from './ActivityTopTabs';
import { Image } from 'react-native';
import { Fonts, Icons } from '../assets';

const Tab = createBottomTabNavigator();

const BottomTabsNav = () => {
  const route = useRoute();
  const theme = route?.params?.theme;

  return (
    <Tab.Navigator
      initialRouteName={navigationStrings.DASHBOARD}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === navigationStrings.DASHBOARD) {
            iconName = 'dashboard';
            return <Image source={Icons.home} style={{ height: 26, width: 26, tintColor: color }} resizeMode='contain' />;
          } else if (route.name === navigationStrings.ACTIVITY) {
            iconName = 'barschart';
            return <Image source={Icons.activity} style={{ height: 26, width: 26, tintColor: color }} resizeMode='contain' />;
          } else if (route.name === navigationStrings.MOVEMONEY) {
            iconName = 'money';
            return <Image source={Icons.dollor_bottombar} style={{ height: 26, width: 26, tintColor: color }} resizeMode='contain' />;
          } else if (route.name === navigationStrings.ACCOUNT) {
            iconName = 'bank';
            return <Image source={Icons.user_bottombar} style={{ height: 26, width: 26, tintColor: color }} resizeMode='contain' />;
          } else if (route.name === navigationStrings.SETTINGS) {
            iconName = 'setting';
            return <AntIcon name={iconName} size={30} color={color} />;
          }
        },
        tabBarActiveTintColor: Colors[theme].blue,
        tabBarInactiveTintColor: Colors[theme].black,
        tabBarStyle: {
          backgroundColor: Colors[theme].white,
          height: 55
        },
        tabBarLabelStyle: {
          fontFamily: Fonts.medium,
          color: Colors[theme].black
        },
      })}>
      <Tab.Screen
        name={navigationStrings.DASHBOARD}
        component={Dashboard}
        initialParams={{ theme: theme }}
      />
      <Tab.Screen
        name={navigationStrings.ACTIVITY}
        component={ActivityTopTabs}
        initialParams={{ theme: theme }}
      />
      <Tab.Screen
        name={navigationStrings.MOVEMONEY}
        component={MoveMoney}
        initialParams={{ theme: theme, isMoveMoney: true }}
      />
      <Tab.Screen
        name={navigationStrings.ACCOUNT}
        component={Account}
        initialParams={{ theme: theme }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNav;
