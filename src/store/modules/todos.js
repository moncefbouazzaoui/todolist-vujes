import axios from 'axios';

const state = {
    todos : [],
    filter: 'all'
};
const getters = {
    allTodos: (state) => state.todos,
    completedTodos: (state) => state.todos.filter(todo => todo.completed = true),
    uncompletedTodos: (state) => state.todos.filter(todo => todo.completed = false),
    countTodos: (state) => state.todos.length
};
const actions = {
    async fetchTodos({ commit }) {
        console.log(12)
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3');
        commit('setTodos', response.data);
    },
    async addTodo({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
            title, completed: false
        });
        commit('addTodo', response.data);
    },
    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('deleteTodo', id);
    },
    async updateTodo({ commit }, todo) {
        await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo);
        commit('updateTodo', todo);
    }
};
const mutations = {
    setTodos: (state, todos) => ( state.todos = todos ),
    addTodo: (state, todo) => ( state.todos.unshift(todo)),
    deleteTodo: (state, id) => ( state.todos = state.todos.filter(todo => todo.id !== id)),
    updateTodo: (state, todo) => {
        const index = state.todos.findIndex(item => item.id === todo.id);
        if (index !== -1) {
            state.todos.splice(index, 1, todo);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}