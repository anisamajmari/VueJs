<template>
  <router-view v-slot="slotProps">
    <transition name="fade-button" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paragraphIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    enterCancelled(element) {
      console.log(element);
      clearInterval(this.enterInterval);
    },
    leaveCancelled(element) {
      console.log(element);
      clearInterval(this.leaveInterval);
    },
    beforeEnter(element) {
      console.log('beforeEnter');
      element.style.opacity = 0;
    },
    enter(element, done) {
      console.log('enter');
      let round = 1;
      this.enterInterval = setInterval(() => {
        element.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    afterEnter(element) {
      console.log('afterEnter');
      console.log(element);
    },
    beforeLeave(element) {
      console.log('beforeLeave');
      element.style.opacity = 1;
    },
    leave(element, done) {
      console.log('leave');
      let round = 1;
      this.leaveInterval = setInterval(() => {
        element.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    afterLeave(element) {
      console.log('After leave');
      console.log(element);
    },
  },
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */
  animation: slide-fade 0.3s ease-out forwards;
}

/* /////.v-enter-from {
  .paragraph-enter-from {
  opacity: 0;
  transform: translateY(-30px);
} */

/* .paragraph-enter-active {
  animation: slide-fade 2s ease-out;
} */

/* .paragraph-enter-to {
  opacity: 1;
  transform: translateY(0);
} */

/* .paragraph-leave-from {
  opacity: 1;
  transform: translateY(0);
} */

/* .paragraph-leave-active {
  animation: slide-fade 0.3s ease-in;
} */

/* .paragraph-leave-to {
  opacity: 0;
  transform: translateY(30px);
} */

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-enter-from {
  opacity: 1;
}

.route-enter-from {
}

.route-enter-active {
  animation: slide-fade 0.4s ease-out;
}

.route-enter-to {
}

.route-leave-active {
  animation: slide-fade 0.4s ease-in;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
