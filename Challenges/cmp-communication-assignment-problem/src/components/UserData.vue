<template>
  <section>
    <form>
      <div>
        <label>Name</label>
        <input type="text" v-model="inputName" />
      </div>

      <div>
        <label>Age</label>
        <input type="text" v-model="inputAge" />
      </div>
      <button @submit.prevent="submitData">Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["set-data"],

  data() {
    return {
      inputName: "",
      inputAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("set-data", this.inputAge, this.inputName);
    },
  },
};
</script>
