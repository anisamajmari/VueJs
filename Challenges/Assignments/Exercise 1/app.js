const app = Vue.createApp({
  data() {
    return {
      name: "Anisa",
      age: 22,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/800px-SNice.svg.png",
    };
  },

  methods: {
    randomFloatNumber() {
      return Math.random();
    },
  },
});

app.mount("#exercise");
