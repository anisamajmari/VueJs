<template>
  <button @click="login" v-if="!isAuth">LogIn</button>
  <button @click="logout" v-if="isAuth">LogOut</button>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.dispatch('logIn');
    },
    logout() {
      this.$store.dispatch('logOut');
    },
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
};
</script>
