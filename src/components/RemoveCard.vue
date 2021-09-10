<template>
  <span @click="removeCard" class="remove">x</span>
</template>

<script>
export default {
  name: "RemoveCard",

  methods: {
    removeCard() {
      this.$emit("removeCard");
    },
  },
};
</script>

<style lang="scss" scoped>
.remove {
  color: black;
  font-size: 200%;
  position: absolute;
  left: 250px;
  display: none;
  &:hover {
    cursor: pointer;
  }
}
</style>
