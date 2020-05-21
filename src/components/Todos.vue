<template>
    <section class="main">
        <div class="completed-wrapper"><input id="toggle-all" type="checkbox" class="toggle-all"> <label for="toggle-all">Complete all tasks</label> <button class="clear-completed">
            Clear completed
        </button>
        </div>
        <ul class="todo-list">
            <li v-bind:class="{'completed': todo.completed}" :key="todo.id" v-for="todo in allTodos" class="todo">
                <div class="view"><input type="checkbox" @click="toggleTodo(todo)" class="toggle"> <label> {{ todo.title }}</label> <button  @click="deleteTodo(todo.id)" class="destroy"></button></div>
                <input type="text" class="edit">
            </li>
        </ul>
    </section>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: 'Todos',
        computed: mapGetters(['allTodos']),
        methods: {
            ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
            toggleTodo(todo) {
                const newTodo = {
                    id: todo.id,
                    title: todo.title,
                    completed: !todo.completed
                };
                this.updateTodo(newTodo);
            }
        },
        created() {
            this.fetchTodos();
        }
    }
</script>

<style>
</style>
