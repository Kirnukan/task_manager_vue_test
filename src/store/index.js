import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks: JSON.parse(localStorage.getItem('tasks')) || []
    },
    mutations: {
        ADD_TASK(state, task) {
            state.tasks.push(task)
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        },
        REMOVE_TASK(state, task) {
            state.tasks = state.tasks.filter(t => t.id !== task.id)
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        },
        EDIT_TASK(state, editedTask) {
            const taskIndex = state.tasks.findIndex(task => task.id === editedTask.id)
            if (taskIndex !== -1) state.tasks.splice(taskIndex, 1, editedTask)
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        }
    },
    actions: {
        addTask({ commit }, task) {
            commit('ADD_TASK', task)
        },
        removeTask({ commit }, task) {
            commit('REMOVE_TASK', task)
        },
        editTask({ commit }, task) {
            commit('EDIT_TASK', task)
        }
    },
    getters: {
        tasks: state => state.tasks
    }
})
