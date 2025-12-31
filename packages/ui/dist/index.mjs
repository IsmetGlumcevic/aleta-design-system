// src/button.tsx
import { jsx } from "react/jsx-runtime";
function Button({ children, variant = "primary" }) {
  const styles = {
    primary: "bg-[var(--color-brand)] text-[var(--color-onBrand)]",
    secondary: "border border-[var(--color-border)]",
    danger: "bg-[var(--color-danger)] text-white"
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: `px-4 py-2 rounded-md text-sm font-medium ${styles[variant]}`,
      children
    }
  );
}

// src/header.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function Header({
  logo,
  leftAction,
  rightActions = []
}) {
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: "\n        w-full\n        h-[60px]\n        flex\n        items-center\n        justify-between\n        px-4\n        bg-[var(--header-bg)]\n        border-b\n        border-[var(--header-border)]\n      ",
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
export {
  Button,
  Header,
  IconButton
};
