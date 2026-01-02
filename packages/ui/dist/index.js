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

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button,
  Header: () => Header,
  IconButton: () => IconButton,
  ProductCard: () => ProductCard
});
module.exports = __toCommonJS(index_exports);

// src/button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var import_jsx_runtime2 = require("react/jsx-runtime");
function Header({
  logo,
  leftAction,
  rightActions = [],
  className
}) {
  const baseClassName = "w-full h-[60px] flex items-center justify-between px-4 bg-[var(--header-bg)] border-b border-[var(--header-border)]";
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "header",
    {
      className: [baseClassName, className].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex items-center gap-2 min-w-[48px]", children: leftAction }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex-1 flex justify-center", children: logo }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex items-center gap-2 min-w-[48px] justify-end", children: rightActions.map((action, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: action }, index)) })
      ]
    }
  );
}

// src/icon-button.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function IconButton({ icon, onClick }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "button",
    {
      onClick,
      className: "\n        w-10\n        h-10\n        flex\n        items-center\n        justify-center\n        rounded-md\n        hover:bg-[var(--header-hover)]\n      ",
      children: icon
    }
  );
}

// src/product-card.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function ProductCard({
  imageSrc,
  imageAlt,
  description,
  price,
  onAddToCart,
  addToCartLabel = "Dodaj u kosaricu",
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "div",
    {
      className: [
        "overflow-hidden rounded-md border border-[var(--color-border)] bg-[var(--color-bg)]",
        className
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "img",
          {
            src: imageSrc,
            alt: imageAlt,
            className: "w-full h-48 object-cover"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "p-4 flex flex-col gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "text-sm", children: description }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "text-base font-semibold", children: price }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, { onClick: onAddToCart, className: "w-full", children: addToCartLabel })
        ] })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Header,
  IconButton,
  ProductCard
});
