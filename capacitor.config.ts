import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.inteligenciatitan.app',
  appName: 'Inteligencia Titan',
  webDir: 'www',
  // A configuração 'server' abaixo é crucial.
  // Ela informa ao app que qualquer URL dentro de 'inteligenciatitan.com.br'
  // deve ser aberta dentro do próprio app, e não no Safari.
  server: {
    hostname: 'inteligenciatitan.com.br',
    androidScheme: 'https',
    iosScheme: 'https'
  },
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