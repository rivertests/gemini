import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.inteligenciatitan.app',
  appName: 'Inteligencia Titan',
  webDir: 'www',
  server: {
    url: 'https://inteligenciatitan.com.br',
    errorPath: 'index.html',
    iosScheme: 'https'
  },
  // A configuração abaixo aumenta a quantidade de logs que o app nos dará.
  loggingBehavior: 'debug',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#101212",
      androidSplashResourceName: "splash",
      iosSplashResourceName: "Splash",
      showSpinner: false,
    }
  }
};

export default config;