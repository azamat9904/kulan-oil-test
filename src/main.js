import Vue from 'vue'
import './assets/css/bootstrap.min.css'
import App from './App.vue'
import store from './store'
import router from './router'
import dotenv from 'dotenv'
import { errorHandler } from "@/helpers/globalErrorHandler"
import { registerBaseComponents } from "@/helpers/registerBaseComponents";
import loadPlugins from "@/helpers/loadPlugins";

dotenv.config()
registerBaseComponents(Vue);
loadPlugins(["toast-notification", "vuelidate"]);

Vue.config.productionTip = false
Vue.config.errorHandler = errorHandler(store);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
