import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  IonApp, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonicVue,
  IonRouterOutlet, IonIcon, IonButton, IonLabel, IonInput, IonItem, IonCol
} from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css'
import * as allIcons from "ionicons/icons";
// import { App as CapacitorApp } from '@capacitor/app';

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store)

const components = {
  IonApp, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonicVue,
  IonRouterOutlet, IonIcon, IonButton, IonLabel, IonInput, IonItem, IonCol
};

Object.entries(components).forEach(([name, component]) => {
  app.component(name, component)
})

app.mixin({
  methods: {
    getIcon(name) {
      return allIcons[name];
    },
  },
  computed:{
  }
})
// CapacitorApp.addListener('backButton', ({canGoBack}) => {
//   if((!canGoBack) || (window.history.state.back == null)){
//     CapacitorApp.exitApp();
//   } else {
//     window.open(window.history.state.back, "_self")
//   }
// });
app.mount('#app');