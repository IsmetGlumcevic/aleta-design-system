import * as React from "react";

import { Button } from "./button";

type ProductCardProps = {
  imageSrc: string;
  imageAlt: string;
  description: React.ReactNode;
  price: React.ReactNode;
  onAddToCart?: () => void;
  addToCartLabel?: string;
  className?: string;
};

export function ProductCard({
  imageSrc,
  imageAlt,
  description,
  price,
  onAddToCart,
  addToCartLabel = "Dodaj u kosaricu",
  className,
}: ProductCardProps) {
  return (
    <div
      className={[
        "overflow-hidden rounded-md border border-[var(--color-border)] bg-[var(--color-bg)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex flex-col gap-3">
        <div className="text-sm">{description}</div>
        <div className="text-base font-semibold">{price}</div>

        <Button onClick={onAddToCart} className="w-full">
          {addToCartLabel}
        </Button>
      </div>
    </div>
  );
}
