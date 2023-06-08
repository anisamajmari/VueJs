const app = Vue.createApp({
  data() {
    return {
      enteredTask: "",
      tasks: [],
      listVisibility: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
      this.enteredTask = "";
    },
    toggleListVisibility() {
      this.listVisibility = !this.listVisibility;
    },
  },
});

app.mount("#assignment");
