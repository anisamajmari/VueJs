const app = Vue.createApp({
  data() {
    return {
      message1: "Finish the course!",
      //   message2: "<h2>Master Vue!</h2>",
      message2: "Master Vue!",

      vueLink: "https://vuejs.org/",
    };
  },

  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.message1;
      } else {
        return this.message2;
      }
    },
  },
});

app.mount("#user-goal");
