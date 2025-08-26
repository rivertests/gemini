import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.inteligenciatitan.app',
  appName: 'Inteligencia Titan',
  webDir: 'www',
  // Removemos o bloco 'server' completamente. A lógica agora está 100% no index.html.
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
