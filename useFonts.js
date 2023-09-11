import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default useFonts = async () =>
    await Font.loadAsync({
        Bold: require('./assets/fonts/Poppins-Bold.tff'),
        Light: require('./assets/fonts/Poppins-Light.tff'),
        Medium: require('./assets/fonts/Poppins-Medium.tff'),
        Regular: require('./assets/fonts/Poppins-Regular.tff'),
    });