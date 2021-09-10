<template>
  <div class="home">
    <Modal :modalShow="modalShow" 
    @confirmDelete="confirmDelete"
    @cancel="cancel"
    />
    <Top title="E-Wallet" class="top" />
    <Card :card="selectCard" 
    @removeCard='removeCard'
    />
    <CardStack 
    :cards="cards" 
    @selectedCard="selectedCard" 
    @removeCard='removeCard'
    />

    <div>
      <router-link to="/addcard" tag="li" >
        <button class="btn-add-card" @click="addCard">Add Card</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Top from "@/components/Top";
import Card from "@/components/Card";
import CardStack from "@/components/CardStack";
import Modal from "@/components/Modal";

export default {
  name: "Home",
  props: {
    cards: Array,
    selectCard: Object,
    modalShow:  Boolean
  },
  components: {
    Top,
    Card,
    CardStack,
    Modal
  },
  data() {
    return {
    };
  },
  methods: {
    addCard() {
      this.$emit("toggle");
    },
    selectedCard(card) {
      this.$emit("selectedCard", card);
    },
     removeCard() {
      this.$emit("removeCard");
    },
    confirmDelete(){
      this.$emit("confirmDelete")
    },
    cancel(){
      this.$emit('cancel')
    }
  },
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn-add-card {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 10px;
  width: 500px;
  height: 75px;
  margin-top: 300px;
  font-size: 200%;
  color: black;
  &:hover {
    background-color: black;
    cursor: pointer;
    color: white;
    text-decoration: none;
  }
}
.top {
  text-align: center;
}
.card{margin-bottom: 30px ;}
li{list-style-type: none;}
</style>
