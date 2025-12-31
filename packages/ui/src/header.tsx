import * as React from "react";

type HeaderProps = {
  logo?: React.ReactNode;
  leftAction?: React.ReactNode;
  rightActions?: React.ReactNode[];
};

export function Header({
  logo,
  leftAction,
  rightActions = [],
}: HeaderProps) {
  return (
    <header
      className="
        w-full
        h-[60px]
        flex
        items-center
        justify-between
        px-4
        bg-[var(--header-bg)]
        border-b
        border-[var(--header-border)]
      "
    >
      {/* Left */}
      <div className="flex items-center gap-2 min-w-[48px]">
        {leftAction}
      </div>

      {/* Center */}
      <div className="flex-1 flex justify-center">
        {logo}
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 min-w-[48px] justify-end">
        {rightActions.map((action, index) => (
          <span key={index}>{action}</span>
        ))}
      </div>
    </header>
  );
}
