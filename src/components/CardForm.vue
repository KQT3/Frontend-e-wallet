<template>
  <div class="d-flex flex-row justify-content-center">
    <form class="">
      <div class="form-group w-100">
        <label for="number">Card Number</label>
        <input type="text" class="form-control" id="number" v-model="tmpCard.number" />
      </div>
      <div class="form-group">
        <label for="name">Cardholder Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Firstname LastName"
          v-model="tmpCard.holder"
        />
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="month">Month</label>
          <select name="month" class="form-control" v-model="tmpCard.validMonth">
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
        <div class="form-group col-md-6">
          <label for="inputState">Year</label>
          <select id="inputState" class="form-control" v-model="tmpCard.validYear">
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
          </select>
        </div>
        <div class="form-group col-md-12">
          <label for="vendor">Vendor</label>
          <select name="vendor" id="vendor" class="form-control" v-model="tmpCard.vendor">
            <option value="Bitcoin">Bitcoin Inc</option>
            <option value="Blockchain">Blockchain Inc</option>
            <option value="Evil">Evil Corp</option>
            <option value="Ninja Bank">Ninja Bank</option>
          </select>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    tmpCard: Object,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
input {
  width: 500px;
}
</style>
