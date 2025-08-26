import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.inteligenciatitan.app',
  appName: 'Inteligencia Titan',
  webDir: 'www',
  bundledWebRuntime: false,
  // Adicione a configuração do servidor aqui
  server: {
    url: 'https://inteligenciatitan.com.br', // URL principal
    allowNavigation: [
      'inteligenciatitan.com.br' // Permite a navegação dentro do seu domínio
    ]
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000, // Duração da splash screen em milissegundos
      launchAutoHide: true,
      backgroundColor: "#ffffff", // Cor de fundo da splash
      androidSplashResourceName: "splash",
      iosSplashResourceName: "Splash",
      showSpinner: false, // Opcional: esconde o spinner de carregamento
    }
  }
};

export default config;
