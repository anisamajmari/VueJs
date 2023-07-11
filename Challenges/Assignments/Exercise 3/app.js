const app = Vue.createApp({
  data() {
    return {
      value: 0,
    };
  },

  computed: {
    result() {
      if (this.value === 37) {
        return "Done.";
      } else {
        return "Not there yet!";
      }
    },
  },

  watch: {
    result() {
      setTimeout(() => {
        this.value = 0;
      }, 5000);
    },
  },
});

app.mount("#exercise");
