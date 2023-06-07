const app = Vue.createApp({
  data() {
    return {
      myName: "Anisa",
      myAge: 22,
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/800px-SNice.svg.png",
      inputFieldValue: "value",
    };
  },
  methods: {
    calcRandomNum() {
      const randomNum = Math.random();
      return randomNum;
    },
  },
});

app.mount("#assignment");
