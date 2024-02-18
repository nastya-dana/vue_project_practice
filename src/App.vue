<template>
  <router-view />
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'App',
  components: {
  },
  props: {
  },
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      if (!localStorage.getItem('basket')) {
        localStorage.setItem('basket', JSON.stringify([]))
      } else {
        store.commit('SetStoreBasket')
      }
    })
  }
}
</script>

<style lang="scss" scoped></style>

