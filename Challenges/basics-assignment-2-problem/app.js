const app = Vue.createApp({
  data() {
    return {
      output: "",
      confirmedOutput: "",
    };
  },
  methods: {
    alertMessage() {
      alert("This is the message of clicking the button.");
    },

    updateOutput(event) {
      this.output = event.target.value;
    },

    confirmInput() {
      this.confirmedOutput = this.output;
    },
  },
});

app.mount("#assignment");
