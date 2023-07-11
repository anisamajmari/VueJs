const app = Vue.createApp({
  data() {
    return {
      value: "",
    };
  },

  methods: {
    buttonClicked() {
      alert("Button is clicked!!!");
    },

    updateValue(event) {
      this.value = event.target.value;
    },
  },
});

app.mount("#exercise");
