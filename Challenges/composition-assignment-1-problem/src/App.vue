<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <!--                 <h3 v-if="courseData.goalVisibility">{{ goal }}</h3> -->
  <h3 v-if="goalIsVisible">{{ goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoalVisibility">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import { ref } from 'vue';

// import { reactive } from 'vue';

export default {
  // setup() {
  //   // const coursGoal = ref('Learn Vue!');
  //   // const goalIsVisible = ref(false);
  //   // const data = ref({
  //   //   goal: 'Learn Vue!!',
  //   //   goalVisibility: false,
  //   // });
  //   const data = reactive({
  //     goal: 'Learn Vue!',
  //     goalVisibility: false,
  //   });
  //   function toggleGoalVisibility() {
  //     // goalIsVisible.value = !goalIsVisible.value;
  //     // data.value.goalVisibility = !data.value.goalVisibility;
  //     data.goalVisibility = !data.goalVisibility;
  //   }
  //   // return {
  //   //   goal: coursGoal,
  //   //   goalVisibility: goalIsVisible,
  //   //   toggleGoalVisibility,
  //   // };
  //   // return {
  //   //   goal: data.value.goal,
  //   //   courseData: data,
  //   //   toggleGoalVisibility,
  //   // };
  //   return {
  //     goal: data.goal,
  //     courseData: data,
  //     toggleGoalVisibility,
  //   };
  // },

  data() {
    return {
      goal: 'Learn Vue!',
      goalIsVisible: false,
    };
  },

  methods: {
    toggleGoalVisibility() {
      this.goalIsVisible = !this.goalIsVisible;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
