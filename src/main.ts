import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router.ts";

// Vuetify
import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import BaseTextField from "./components/ui/BaseTextField.vue";
import BaseSelect from "./components/ui/BaseSelect.vue";
import BasePagination from "./components/ui/BasePagination.vue";

const app = createApp(App);

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'fa',
        aliases,
        sets: {
            fa,
        },
    },
})

app.use(router);
app.use(vuetify);

app.component("base-text-field", BaseTextField);
app.component("base-select", BaseSelect);
app.component("base-pagination", BasePagination);

app.mount('#app');
