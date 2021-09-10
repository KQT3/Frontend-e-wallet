import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { uuid } from "vue-uuid";
new Vue({
  router,
  store,
  data() {
    return {
      cards: [
        {
          id: uuid.v4(),
          holder: "The name",
          vendor: "Blockchain",
          number: "XXXXYYYYZZZZFFFF",
          validMonth: "02",
          validYear: "22",
          remove: false,
        },
        {
          id: uuid.v4(),
          holder: "The name",
          vendor: "Bitcoin",
          number: "XXXXYYYYZZZZFFFF",
          validMonth: "02",
          validYear: "22",
          remove: false,
        },
        {
          id: uuid.v4(),
          holder: "The name",
          vendor: "Evil",
          number: "XXXXYYYYZZZZFFFF",
          validMonth: "02",
          validYear: "22",
          remove: false,
        },
        {
          id: uuid.v4(),
          holder: "The name",
          vendor: "Ninja Bank",
          number: "XXXXYYYYZZZZFFFF",
          validMonth: "02",
          validYear: "22",
          remove: false,
        },
      ],
      tmpCard: {
        id: uuid.v4(),
        holder: "",
        vendor: "",
        number: "",
        validMonth: "",
        validYear: "",
        remove: false
      },
    }
  },
  render: h => h(App)
}).$mount('#app')
