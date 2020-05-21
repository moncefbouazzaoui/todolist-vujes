<template>
  <footer class="footer">
   <span class="todo-count"><strong>3</strong> tasks left
   </span>

  </footer>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'Footer',
        computed: mapGetters(['countTodos'])
    }
</script>

<style scoped>
</style>
