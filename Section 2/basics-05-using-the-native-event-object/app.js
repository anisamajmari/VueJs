const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  computed: {
    fullName() {
      if (this.name === "") {
        return "";
      } else {
        return this.name + " " + "Majmari";
      }
    },
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
    outputFullName() {
      if (this.name === "") {
        return "";
      } else {
        return this.name + " " + "Majmari";
      }
    },
  },
});

app.mount("#events");
