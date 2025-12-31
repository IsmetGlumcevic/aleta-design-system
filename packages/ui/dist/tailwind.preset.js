"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/tailwind.preset.ts
var tailwind_preset_exports = {};
__export(tailwind_preset_exports, {
  default: () => tailwind_preset_default
});
module.exports = __toCommonJS(tailwind_preset_exports);

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
