<template>
  <div class="card" :class="cardColor()">
    <header>
      <RemoveCard 
      v-if="card.remove === true" 
      @removeCard="removeCard" 
      class="remove-card" />
      <img src="@/assets/chip-dark.svg" alt="" />
    </header>
    <div class="card-type">
      <img
        v-if="card.vendor == 'Blockchain'"
        src="@/assets/vendor-blockchain.svg"
        alt=""
      />
      <img v-if="card.vendor == 'Bitcoin'" src="@/assets/vendor-bitcoin.svg" alt="" />
      <img v-if="card.vendor == 'Evil'" src="@/assets/vendor-evil.svg" alt="" />
      <img v-if="card.vendor == 'Ninja Bank'" src="@/assets/vendor-ninja.svg" alt="" />
    </div>
    <div class="number">
      {{ card.number }}
    </div>
    <section class="holder">
      <div>
        <div>Cardholder Name</div>
        <div>{{ card.holder }}</div>
      </div>
      <div class="text-center">
        <div>Valid Until</div>
        <div>{{ card.validMonth }}/{{ card.validYear }}</div>
      </div>
    </section>
  </div>
</template>

<script>
import RemoveCard from "@/components/RemoveCard";
export default {
  name: "Card",
  components: {
    RemoveCard,
  },
  props: {
    card: Object,
  },
  methods: {
    cardColor() {
      if (this.card.vendor == "Blockchain") return "blockchain";
      else if (this.card.vendor == "Bitcoin") return "bitcoin";
      else if (this.card.vendor == "Evil") return "evil";
      else if (this.card.vendor == "Ninja Bank") return "ninja-Bank";
    },
    removeCard() {
      this.$emit("removeCard");
    },
    
      
    
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 10px;
  -webkit-box-shadow: -2px 2px 6px 4px #000000;
  box-shadow: -2px 2px 6px 4px #e7e6e6;
  width: 500px;
  height: 300px;
  position: relative;
}
img {
  margin: 20px;
}
.card-type {
  position: absolute;
  left: 420px;
  top: 0px;
}
.number {
  margin-top: 30px;
  margin-left: 10px;
  font-size: 200%;
}
.holder {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
}
.blockchain {
  background-color: purple;
}
.bitcoin {
  background-color: orange;
}
.ninja-Bank {
  background-color: grey;
}
.evil {
  background-color: red;
}
.card:hover {
  .remove-card {
    display: flex;
  }
}
</style>
