import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import Worker from "worker-loader!./workers/test.worker";

Vue.config.productionTip = false;

const worker = new Worker();

worker.postMessage({ a: 1 });
worker.onmessage = event => {
  console.log(event);
};

worker.addEventListener("message", event => {
  console.log(event);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
