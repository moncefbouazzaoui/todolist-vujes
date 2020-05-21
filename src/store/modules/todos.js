import axios from 'axios';

const state = {
    todos : [],
    isLoading: true,
    filter: 'all'
};
const getters = {
    allTodos: (state) => state.todos,
    completedTodos: (state) => state.todos.filter(todo => todo.completed = true),
    uncompletedTodos: (state) => state.todos.filter(todo => todo.completed = false),
    countTodos: (state) => state.todos.length,
    isLoading: (state) => state.isLoading
};
const actions = {
    async fetchTodos({ commit }) {
        commit('startLoading');
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3');
        commit('setTodos', response.data);
        commit('endLoading');
    },
    async addTodo({ commit }, title) {
        commit('startLoading');
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
            title, completed: false
        });
        commit('addTodo', response.data);
        commit('endLoading');
    },
    async deleteTodo({ commit }, id) {
        commit('startLoading');
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('deleteTodo', id);
        commit('endLoading');
    },
    async updateTodo({ commit }, todo) {
        commit('startLoading');
        await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo);
        commit('updateTodo', todo);
        commit('endLoading');
    }
};
const mutations = {
    startLoading: (state) => ( state.isLoading = true ),
    endLoading: (state) => ( state.isLoading = false ),
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