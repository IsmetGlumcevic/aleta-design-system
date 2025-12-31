import tokens from "../tokens/tokens.json";

export default {
  theme: {
    extend: {
      colors: {
        brand: tokens.color.brand,
        danger: tokens.color.danger,
        border: tokens.color.border
      },
      fontFamily: {
        sans: [tokens.font.sans, "sans-serif"]
      }
    }
  }
};
