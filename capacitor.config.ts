import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.inteligenciatitan.app',
  appName: 'Inteligencia Titan',
  webDir: 'www',
  // A configuração 'server' abaixo é a solução definitiva.
  server: {
    // 1. O app irá carregar esta URL diretamente como se fosse nativa.
    url: 'https://inteligenciatitan.com.br',
    // 2. Se a URL acima falhar, o Capacitor irá carregar este arquivo local automaticamente.
    errorPath: 'index.html'
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
