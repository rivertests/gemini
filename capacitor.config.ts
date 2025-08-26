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
    },
    // Configuração da Status Bar para resolver o problema de sobreposição
    StatusBar: {
      style: 'dark', // Deixa o texto da status bar (horas, bateria) branco
      overlay: false, // Esta é a linha mais importante: move o app para baixo da status bar
      backgroundColor: '#101212' // Define a cor da área da status bar para combinar com seu app
    }
  }
};

export default config;
