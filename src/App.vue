<template>
  <div id="app">
    <Home
      v-if="homeVisible"
      @toggle="toggle"
      :cards="$root.cards"
      :selectCard="selectCard"
      @selectedCard="selectedCard"
      :modalShow="modalShow"
      @removeCard="removeCard"
      @confirmDelete="confirmDelete"
      @cancel="cancel"
    />
    <AddCard v-if="!homeVisible" @toggle="toggle" :cards="$root.cards" />
  </div>
</template>

<script>
import Home from "@/views/Home";
import AddCard from "@/views/AddCard";

export default {
  name: "App",
  components: {
    Home,
    AddCard,
  },
  data() {
    return {
      homeVisible: true,
      selectCard: {},
      modalShow: false,
    };
  },
  methods: {
    toggle() {
      this.homeVisible = !this.homeVisible;
      this.addCard = !this.addCard;
    },
    selectedCard(card) {
      this.selectCard = card;

      this.$root.cards.forEach((cards) => {
        cards.remove = false;
      });
      this.selectCard.remove = true;
    },
    removeCard() {
      this.modalShow = !this.modalShow;
    },
    confirmDelete() {
      let idx = this.$root.cards.indexOf(this.selectCard);
      this.$root.cards.splice(idx, 1);

      if (this.$root.cards[0] == undefined) {
        this.selectedCard(this.$root.tmpCard);
      } else {
        this.selectedCard(this.$root.cards[0]);
      }
        this.modalShow = !this.modalShow;
    },
    cancel() {
      this.modalShow = !this.modalShow;
    },
  },
};
</script>
<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
