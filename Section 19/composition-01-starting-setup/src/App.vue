<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
    </div>
  </section>
</template>

<script>
// import { reactive } from 'vue';
import { ref, computed, watch } from 'vue';

export default {
  setup() {
    // const name = ref('Anisa');
    const age = ref('21');

    const firstName = ref('');
    const lastName = ref('');

    // const user = reactive({
    //   name: 'Anisa',
    //   age: 21,
    // });

    const fullName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    watch([age, fullName], function (newValues, oldValues) {
      console.log('Old age: ' + oldValues[0]);
      console.log('New age: ' + newValues[0]);
      console.log('Old name: ' + oldValues[1]);
      console.log('New name: ' + newValues[1]);
    });

    function setNewAge() {
      // user.age = 22;
      age.value = 22;
    }

    // return {
    //   user: user,
    //   setAge: setNewAge,
    // };

    return {
      userName: fullName,
      age: age,
      setAge: setNewAge,
      firstName,
      lastName,
    };
  },
  // data() {
  //   return {
  //     userName: 'Anisa',
  //   };
  // },

  // methods: {
  //   setNewAge() {
  //   },
  // },
  // watch: {
  //   age(value) {
  //     console.log(value);
  //   },
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
