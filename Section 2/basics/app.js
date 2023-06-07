const app = Vue.createApp({
  data() {
    return {
      message: "Finish the course!",
      vueLink: "https://vuejs.org/",
    };
  },

  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "Learn Vue!";
      } else {
        return "Advance Vue!";
      }
    },
  },
});

app.mount("#user-goal");
