<template>
  <div>
    <h1>Task List</h1>
    <form @submit.prevent="createTask" class="task-form">
      <input type="text" v-model="newTask" placeholder="Enter a task" required>
      <button type="submit" class="btn">Add Task</button>
    </form>
    <div v-for="task in tasks" :key="task.id" class="task-item">
      <p>{{ task.title }}</p>
      <button @click="deleteTask(task)" class="btn btn-delete">Delete</button>
    </div>
    <router-link to="/" class="btn btn-home">Go Back to Home</router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      newTask: ''
    }
  },
  methods: {
    ...mapActions(['addTask', 'removeTask']),
    createTask() {
      if (this.newTask.trim()) {
        this.addTask({ id: Date.now(), title: this.newTask.trim() })
        this.newTask = ''
      }
    },
    deleteTask(task) {
      this.removeTask(task)
    }
  },
  computed: {
    ...mapGetters(['tasks'])
  }
}
</script>
<style src="../styles/TaskList.view.css"></style>