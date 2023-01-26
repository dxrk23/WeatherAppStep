<template>
  <input type="text" class="input" v-model="content" :placeholder="placeholder">
</template>

<script>
export default {
  name: "Input",
  props: {
    placeholder: {
      type: String,
      default: 'Type...'
    }
  },
  watch: {
    content(newVal){
      this.$emit('emitChange', newVal)
    }
,  },
  data() {
    return {
      content: ''
    }
  }
}
</script>

<style scoped lang="scss">
.input {
  width: 100%;
  height: 40px;


}
</style>