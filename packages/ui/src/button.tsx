import * as React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
};

export function Button({ children, variant = "primary" }: ButtonProps) {
  const styles = {
    primary: "bg-[var(--color-brand)] text-[var(--color-onBrand)]",
    secondary: "border border-[var(--color-border)]",
    danger: "bg-[var(--color-danger)] text-white",
  };

  return (
    <button
      className={`px-4 py-2 rounded-md text-sm font-medium ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
