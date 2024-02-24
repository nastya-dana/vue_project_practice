<template>
  <button :class="{
    'buttonGoOut': true,
    'buttonAdd': buttonAdd
  }">
    {{ title }}
  </button>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'ButtonGoOut',
  components: {
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    buttonAdd: {
      type: Boolean,
      default: false
    }
  },
  setup() {
  }
}
</script>

<style lang="scss" scoped>
.buttonGoOut {
  cursor: pointer;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 400;
  // display: flex;
  //   justify-content: center;
  //   align-items: center;
  background-color: transparent;
  width: 200px;
  height: 42px;
  border: 1px solid #D58C51;
  color: #D58C51;

  &:hover {
    background-color: #D58C51;
    color: #161516;
  }
}

.buttonAdd {
  background-color: #D58C51;
  color: #161516;
  margin-left: 137px;

  &:hover {
    background-color: transparent;
    color: #D58C51;
  }
}
</style>
