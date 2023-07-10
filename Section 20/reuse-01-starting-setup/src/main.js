import { createApp } from 'vue';

import App from './App.vue';
import loggerMixing from './mixins/logger';

const app = createApp(App);

// Global mixins
app.mixin(loggerMixing);

app.mount('#app');
