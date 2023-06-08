const app = Vue.createApp({
  data() {
    return {
      input: "",
      paragraphVisible: true,
      inputColor: "",
    };
  },
  methods: {
    toggleVisibility() {
      this.paragraphVisible = !this.paragraphVisible;
    },
  },
  computed: {
    paragraphClasses() {
      return {
        user1: this.input === "user1",
        user2: this.input === "user2",
        visible: this.paragraphVisible,
        hidden: !this.paragraphVisible,
      };
    },
  },
});

app.mount("#assignment");
