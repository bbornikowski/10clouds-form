export default {
  props: {
    fullBorder: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
    },
    customWidth: {
      type: Number,
      default: undefined,
    },
  },
  computed: {
    width() {
      if (!this.customWidth) return false;

      return `max-width: ${this.customWidth}px`;
    },
  },
};
