import * as React from "react";

type IconButtonProps = {
  icon: React.ReactNode;
  onClick?: () => void;
};

export function IconButton({ icon, onClick }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        w-10
        h-10
        flex
        items-center
        justify-center
        rounded-md
        hover:bg-[var(--header-hover)]
      "
    >
      {icon}
    </button>
  );
}
