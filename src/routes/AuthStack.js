import { useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { navigationStrings } from '../constants';
// import { Intro, Login, ResetPassword } from '../modules';
import { Intro } from "../modules/Intro"
import { Login } from "../modules/Login"
import { ResetPassword } from "../modules/ResetPassword"
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const route = useRoute();
  const theme = route?.params?.theme;
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={navigationStrings.INTRO}
        component={Intro}
        initialParams={{ theme: theme }}
      />
      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        initialParams={{ theme: theme }}
      />
      <Stack.Screen
        name={navigationStrings.RESETPASSWORD}
        component={ResetPassword}
        initialParams={{ theme: theme }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
