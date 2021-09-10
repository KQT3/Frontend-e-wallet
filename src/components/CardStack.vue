<template>
  <div class="card-stack">
    <Card
      v-for="(card, idx) in $root.cards"
      :key="idx"
      :card="card"
      @click.native="selectedCard(card)"
      @removeCard="removeCard"
    />
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "CardStack",
  components: {
    Card,
  },
  methods: {
    selectedCard(card) {
      this.$emit("selectedCard", card);
    },
    removeCard() {
      this.$emit("removeCard");
    },
  },
};
</script>

<style lang="scss" scoped>
.card-stack {
  display: grid;
  grid-auto-rows: 5rem;
}
</style>
