<template>
  <div class="wrapper">
    <CompHeader />
    <CompHome />
    <CompFooter />
  </div>
</template>

<script>
import CompHeader from "./Components/Header_footer/Header.vue";
import CompFooter from "./Components/Header_footer/Footer.vue";
import CompHome from "./Components/Home.vue";
export default {
  components: {
    CompHeader,
    CompFooter,
    CompHome
  }
};
</script>

<style>
.wrapper {
  background-color: #f8faff;
}
</style>
