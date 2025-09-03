import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  IonApp, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonicVue,
  IonRouterOutlet, IonIcon, IonButton, IonLabel, IonInput, IonItem, IonCol, IonFooter,
  IonBadge, IonTabBar, IonTabButton, IonTabs, toastController
} from '@ionic/vue';
import '@/assets/css/main.css'
import '@ionic/core/css/ionic.bundle.css'
import * as allIcons from "ionicons/icons";
// import { App as CapacitorApp } from '@capacitor/app';

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store)

const components = {
  IonApp, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonicVue,
  IonRouterOutlet, IonIcon, IonButton, IonLabel, IonInput, IonItem, IonCol, IonFooter,
  IonBadge, IonTabBar, IonTabButton, IonTabs
};

Object.entries(components).forEach(([name, component]) => {
  app.component(name, component)
})

app.mixin({
  methods: {
    getIcon(name) {
      return allIcons[name];
    },
    makeToast(title, message, duration = 5000) {
      toastController.create({
        header: title,
        message: message,
        duration: duration
      }).then(toast => {
        toast.present()
      })
    }
  },
  computed: {
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