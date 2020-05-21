<template>
  <header class="header">
    <form @submit="onSubmit">
      <input autocomplete="off" v-model="title" placeholder="Type your todo list" class="new-todo">
      <button type="submit" v-if="title" class="new-todo-button"></button>
    </form>
  </header>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: 'Header',
        data() {
            return {
                title: ''
            }
        },
        methods: {
            ...mapActions(['addTodo']),
            onSubmit(e) {
                e.preventDefault();
                this.addTodo(this.title);
                this.title = '';
            }
        }
    }
</script>

<style scoped>

</style>
