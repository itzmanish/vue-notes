import Vue from "vue";
import App from "./App.vue";
import AtComponents from "at-ui";
import "at-ui-style"; // Import CSS

// import 'at-ui-style/src/index.scss'      // Or import the unbuilt version of SCSS

Vue.use(AtComponents);

new Vue({
  el: "#app",
  render: h => h(App)
});
