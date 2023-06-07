const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullname: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
    // name(value) {
    //   if (value !== "") {
    //     this.fullname = value + " " + this.lastName;
    //   } else {
    //     this.fullname = "";
    //   }
    // },
    // lastName(value) {
    //   if (value !== "") {
    //     this.fullname = this.name + " " + value;
    //   } else {
    //     this.fullname = "";
    //   }
    // },
  },
  computed: {
    fullname() {
      if (this.name === "") {
        return "";
      } else {
        return this.name + " " + this.lastName;
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
