<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  props: ['firstName', 'lastName', 'age'],
  //   computed: {
  //     userName() {
  //       return this.firstName + ' ' + this.lastName;
  //     },
  //   },
  setup(props, context) {
    const uName = computed(function () {
      return props.firstName + ' ' + props.lastName;
    });

    console.log(context);

    context.emit('save-data'); // this.$emit('save-data', 1)
    return {
      userName: uName,
    };
  },
};
</script>
