<template>
  <div id="app">
    <section class="todoapp">
      <PageTitle title="todos app" />
      <Todo />
    </section>
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";

export default {
  name: "App",
  components: {
    Todo
  }
};
</script>

