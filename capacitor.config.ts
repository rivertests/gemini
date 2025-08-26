import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.inteligenciatitan.app',
  appName: 'Inteligencia Titan',
  webDir: 'www',
  // A configuração abaixo é essencial para que o redirecionamento
  // do index.html funcione dentro do app e não abra o Safari.
  server: {
    hostname: 'inteligenciatitan.com.br'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000, // Diminuímos um pouco para a verificação começar mais rápido
      launchAutoHide: true,
      backgroundColor: "#101212",
      androidSplashResourceName: "splash",
      iosSplashResourceName: "Splash",
      showSpinner: false,
    }
  }
};

export default config;
