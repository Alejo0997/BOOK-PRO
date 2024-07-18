import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'vuetify/styles';
import './assets/main.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';
import colors from 'vuetify/util/colors';

// Importa los componentes que quieres registrar globalmente
import BPInput from '@/components/atoms/BPInput.vue';
import BPButton from '@/components/atoms/BPButton.vue';
import BPThemeToggle from '@/components/atoms/BPThemeToggle.vue';

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                colors: {
                    primary: '#1976D2',
                    secondary: '#424242',
                    accent: '#82B1FF',
                    error: '#FF5252',
                    info: '#2196F3',
                    success: '#4CAF50',
                    warning: '#FB8C00',
                },
            },
            dark: {
                colors: {
                    primary: colors.deepPurple.darken1,
                    secondary: '#64B5F6',
                    accent: '#03DAC6',
                    error: '#CF6679',
                    info: '#2196F3',
                    success: '#4CAF50',
                    warning: '#FB8C00',
                },
            },
        },
    },
});

const app = createApp(App);

// Registra los componentes globalmente
app.component('BPInput', BPInput);
app.component('BPButton', BPButton);
app.component('BPThemeToggle', BPThemeToggle);

app.use(vuetify);
app.use(router);
app.mount('#app');
