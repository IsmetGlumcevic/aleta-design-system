// src/button.tsx
import { jsx } from "react/jsx-runtime";
function Button({
  children,
  variant = "primary",
  className,
  type = "button",
  ...props
}) {
  const styles = {
    primary: "bg-[var(--color-brand)] text-[var(--color-onBrand)]",
    secondary: "border border-[var(--color-border)]",
    danger: "bg-[var(--color-danger)] text-white"
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      type,
      ...props,
      className: [
        "px-4 py-2 rounded-md text-sm font-medium",
        styles[variant],
        className
      ].filter(Boolean).join(" "),
      children
    }
  );
}

// src/header.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function Header({
  logo,
  leftAction,
  rightActions = [],
  className
}) {
  const baseClassName = "w-full h-[60px] flex items-center justify-between px-4 bg-[var(--header-bg)] border-b border-[var(--header-border)]";
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: [baseClassName, className].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ jsx2("div", { className: "flex items-center gap-2 min-w-[48px]", children: leftAction }),
        /* @__PURE__ */ jsx2("div", { className: "flex-1 flex justify-center", children: logo }),
        /* @__PURE__ */ jsx2("div", { className: "flex items-center gap-2 min-w-[48px] justify-end", children: rightActions.map((action, index) => /* @__PURE__ */ jsx2("span", { children: action }, index)) })
      ]
    }
  );
}

// src/icon-button.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function IconButton({ icon, onClick }) {
  return /* @__PURE__ */ jsx3(
    "button",
    {
      onClick,
      className: "\n        w-10\n        h-10\n        flex\n        items-center\n        justify-center\n        rounded-md\n        hover:bg-[var(--header-hover)]\n      ",
      children: icon
    }
  );
}

// src/product-card.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
function ProductCard({
  imageSrc,
  imageAlt,
  description,
  price,
  onAddToCart,
  addToCartLabel = "Dodaj u kosaricu",
  className
}) {
  return /* @__PURE__ */ jsxs2(
    "div",
    {
      className: [
        "overflow-hidden rounded-md border border-[var(--color-border)] bg-[var(--color-bg)]",
        className
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ jsx4(
          "img",
          {
            src: imageSrc,
            alt: imageAlt,
            className: "w-full h-48 object-cover"
          }
        ),
        /* @__PURE__ */ jsxs2("div", { className: "p-4 flex flex-col gap-3", children: [
          /* @__PURE__ */ jsx4("div", { className: "text-sm", children: description }),
          /* @__PURE__ */ jsx4("div", { className: "text-base font-semibold", children: price }),
          /* @__PURE__ */ jsx4(Button, { onClick: onAddToCart, className: "w-full", children: addToCartLabel })
        ] })
      ]
    }
  );
}
export {
  Button,
  Header,
  IconButton,
  ProductCard
};
