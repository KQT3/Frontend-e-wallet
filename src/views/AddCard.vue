<template>
  <div>
    <Top title="Add New Card" />
    <Card :card="tmpCard" />
    <CardForm :tmpCard="tmpCard" />
    <div>
      <router-link to="/" tag="li">
        <button @click="addNewCard" class="btn-add-new-card">Add New Card</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Top from "@/components/Top";
import CardForm from "@/components/CardForm";
import { uuid } from "vue-uuid";

export default {
  name: "AddCard",
  props: {
    cards: Array,
  },
  components: {
    Top,
    CardForm,
    Card,
  },
  data() {
    return {
      tmpCard: {
        id: uuid.v4(),
        holder: "",
        vendor: "",
        number: "",
        validMonth: "",
        validYear: "",
        remove: false,
      },
    };
  },
  methods: {
    addNewCard() {
      this.$root.cards.push(this.tmpCard);
      this.$emit("toggle");
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-add-new-card {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 10px;
  width: 500px;
  height: 75px;
  margin-top: 100px;
  font-size: 200%;
  &:hover {
    background-color: black;
    cursor: pointer;
    color: white;
    text-decoration: none;
  }
}
li {
  list-style-type: none;
}
.card {
  margin-bottom: 30px;
}
</style>
