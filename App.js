import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, useColorScheme, View } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import { store, persistor } from './src/redux/store';
// import MainStack from './src/routes';
import MainStack from './src/routes/MainStack'
import { styling } from './src/theme';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';
import { Loader } from './src/components';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_300Light
} from "@expo-google-fonts/poppins";
import AppLoading from 'expo-app-loading';
import Toast, { DURATION } from 'react-native-easy-toast'

SplashScreen.preventAutoHideAsync();

const App = () => {
  const apptheme = useColorScheme();
  const styles = styling(apptheme);
  const [appIsReady, setAppIsReady] = useState(false)

  let [fontsLoaded] = useFonts({
    "Poppins-Light": Poppins_300Light,
    "Poppins-Regular": Poppins_400Regular,
    "Poppins-Medium": Poppins_500Medium,
    "Poppins-Bold": Poppins_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        // await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  if (!appIsReady) {
    return null;
  }

  // const [isLoaded] = useFonts({
  //   "Poppins-Bold": require('./assets/fonts/Poppins-Bold.tff'),
  //   "light": require('./assets/fonts/Poppins-Light.tff'),
  //   "medium": require('./assets/fonts/Poppins-Medium.tff'),
  //   "regular": require('./assets/fonts/Poppins-Regular.tff'),
  // });

  // const handleOnLayout = useCallback(async () => {
  //   if (isLoaded) {
  //     await SplashScreen.hideAsync(); //hide the splashscreen
  //   }
  // }, [isLoaded]);

  return (
    // <SafeAreaView >
    <View style={styles.screen} onLayout={onLayoutRootView}>
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider theme={DefaultTheme}>
            <Toast ref={(toast) => this.toast = toast} />
            <FlashMessage position={'top'} floating={true} duration={4000} />
            <MainStack />
            <Loader theme={apptheme} />
          </PaperProvider>
        </PersistGate>
      </Provider>
    </View>
    // </SafeAreaView>
  );
};

export default App;
