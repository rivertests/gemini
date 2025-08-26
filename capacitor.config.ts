import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.inteligenciatitan.app',
  appName: 'Inteligencia Titan',
  webDir: 'www',
  server: {
    // 1. O app irá carregar esta URL diretamente como se fosse nativa.
    url: 'https://inteligenciatitan.com.br',
    // 2. Esta linha é a chave: ela permite que o app navegue para
    //    qualquer link DENTRO do seu domínio, sem abrir o Safari.
    allowNavigation: ['inteligenciatitan.com.br'],
    // 3. Se a URL principal falhar (sem internet), o Capacitor irá 
    //    carregar este arquivo local automaticamente.
    errorPath: 'index.html'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#101212",
    }
  }
};

export default config;
