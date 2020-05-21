<template>
  <div id="app">
    <!--<div class="container">-->
      <!--<AddTodo />-->
      <!--<FilterTodos />-->
      <!--<Todos />-->
    <!--</div>-->
    <section class="todoapp">
      <Header />
      <Todos />
      <Footer />
    </section>
  </div>
</template>

<script>
import  './assets/style.css';
import Todos from './components/Todos.vue';
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';

export default {
  name: 'App',
  components: {
      Todos,
      Header,
      Footer
  }
}
</script>

