<template>
  <div id="app">
    <section class="todoapp">
      <Header />
      <Todos />
      <Footer />
    </section>
    <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="true"></loading>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import  './assets/style.css';
import Todos from './components/Todos.vue';
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: 'App',
  components: {
      Todos,
      Header,
      Footer,
      Loading
  },
  computed: mapGetters(['isLoading'])
}
</script>

