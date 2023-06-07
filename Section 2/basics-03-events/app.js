const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    add(number) {
      this.counter = this.counter + number;
      // this.counter++;
    },
    remove(number) {
      this.counter = this.counter - number;
    },
    setName(event, lastname) {
      this.name = event.target.value + " " + lastname;
    },

    submitForm() {
      alert("Submitted!");
    },
    coonfirmInputName() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
