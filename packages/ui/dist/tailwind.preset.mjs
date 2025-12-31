// tokens/tokens.json
var tokens_default = {
  color: {
    brand: "#F32735",
    onBrand: "#FFFFFF",
    danger: "#D92D20",
    border: "#D0D5DD"
  },
  font: {
    sans: "Inter"
  }
};

// src/tailwind.preset.ts
var tailwind_preset_default = {
  theme: {
    extend: {
      colors: {
        brand: tokens_default.color.brand,
        danger: tokens_default.color.danger,
        border: tokens_default.color.border
      },
      fontFamily: {
        sans: [tokens_default.font.sans, "sans-serif"]
      }
    }
  }
};
export {
  tailwind_preset_default as default
};
