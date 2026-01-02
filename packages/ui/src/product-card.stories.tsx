import type { Meta, StoryObj } from "@storybook/react";
import { ProductCard } from "./product-card";

const placeholderImage =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
      <rect width="100%" height="100%" fill="#e5e7eb" />
      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        fill="#111827"
        font-family="Arial"
        font-size="48"
      >
        Product image
      </text>
    </svg>
  `);

const meta: Meta<typeof ProductCard> = {
  title: "Components/ProductCard",
  component: ProductCard,
  argTypes: {
    onAddToCart: { action: "add-to-cart" },
  },
};

export default meta;

export const Default: StoryObj<typeof ProductCard> = {
  args: {
    imageSrc: placeholderImage,
    imageAlt: "Example product image",
    description: "Opis proizvoda ide ovdje.",
    price: "29,99 €",
    addToCartLabel: "Dodaj u kosaricu",
  },
};
