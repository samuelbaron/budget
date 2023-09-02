import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.budget',
  appName: 'Budget',
  server: {
    url: 'http://localhost:8080/',
    cleartext: true
  }
};

export default config;
