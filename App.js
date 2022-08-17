import RegistrationScreen from './components/Screens/RegistrationScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { gStyle } from './styles/style';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View style={gStyle.main} onLayout={onLayoutRootView}>
        <StatusBar style="auto" />
        <ImageBackground
          source={require('./assets/images/photo_BG.png')}
          resizeMode="cover"
          style={gStyle.image}
        >
          <RegistrationScreen />
        </ImageBackground>
      </View>
    </>
  );
}
