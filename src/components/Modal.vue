<template>
  <div>
    <b-modal
      modal-title="Delete Card"
      v-model="showModal"
      ok-title="Delete"
      ok-variant="danger"
      @ok="confirmDelete"
      @cancel="cancel"
      @close="cancel"
      no-close-on-backdrop
    >
      <div class="d-block text-center">
        <h3>Do you want to delete card?</h3>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    modalShow: Boolean,
    
  },
  data() {
    return {};
  },
  methods: {
    confirmDelete() {
      this.$emit("confirmDelete");
    },
    cancel() {
      this.$emit("cancel");
    },
  },
  computed: {
    showModal: {
      get: function () {
        return this.modalShow;
      },
      set: function (newValue) {
        let value = newValue;
        return value;
      },
    },
  },
};
</script>
