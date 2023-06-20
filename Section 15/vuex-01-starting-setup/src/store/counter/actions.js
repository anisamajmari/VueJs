export default {
  increment(context) {
    setTimeout(() => {
      context.commit('addOne');
    }, 2000);
  },
  increase(context, payload) {
    context.commit('increase', payload);
  },
};
