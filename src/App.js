import React from 'react';
import { SafeAreaView, useColorScheme } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import { store, persistor } from './redux/store';
import { MainStack } from './routes';
import { styling } from './theme';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';
import { Loader } from './components';


const App = () => {
  // const apptheme = useColorScheme();
  // const styles = styling(apptheme);
  console.log("#######")
  return (
    <SafeAreaView style={styles.screen}>
      {/* <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider theme={DefaultTheme}>
            <FlashMessage position={'top'} floating={true} duration={4000} />
            <MainStack />
            <Loader theme={apptheme} />
          </PaperProvider>
        </PersistGate>
      </Provider> */}
    </SafeAreaView>
  );
};

export default App;
