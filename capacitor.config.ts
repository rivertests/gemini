import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.inteligenciatitan.app',
  appName: 'Inteligencia Titan',
  webDir: 'www',
  server: {
    // Esta linha é a chave: ela permite que o WebView do app navegue para
    // qualquer link DENTRO deste domínio, sem precisar abrir o Safari.
    allowNavigation: ['inteligenciatitan.com.br']
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: "#101212",
    }
  }
};

export default config;
