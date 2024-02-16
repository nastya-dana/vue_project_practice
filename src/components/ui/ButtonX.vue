<template>
  <button class="button">{{ title }}</button>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'ButtonUi',
  components: {
  },
  props: {
    title: {
      type: String,
      default: '+'
    }
  },
  setup() {
  }
}
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 1px solid #fff;
  border-radius: 50%;
  color: #fff;


  &:hover {
    background-color: #D58C51;
    border: 1px solid #D58C51;
  }
}
</style>
