<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName"></user-data>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set name</button>
    </div>
  </section>
</template>

<script>
// import { reactive } from 'vue';
import { ref, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: {
    UserData,
  },
  setup() {
    // const name = ref('Anisa');
    const age = ref('21');

    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);

    // const user = reactive({
    //   name: 'Anisa',
    //   age: 21,
    // });

    provide('userAge', age);

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

    function setLastName() {
      lastName.value = lastNameInput.value.value;
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
      lastNameInput,
      setLastName,
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

  // provide() {
  //   return { age: this.age };
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
