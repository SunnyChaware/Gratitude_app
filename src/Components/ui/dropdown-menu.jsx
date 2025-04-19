import React from "react";

export function DropdownMenu({ children }) {
  return <div className="relative">{children}</div>;
}

export function DropdownMenuTrigger({ asChild, children }) {
  return <div className="cursor-pointer">{children}</div>;
}

export function DropdownMenuContent({ align = "start", children }) {
  const alignmentClasses = align === "end" ? "right-0" : "left-0";
  return (
    <div
      className={`absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 ${alignmentClasses}`}
    >
      {children}
    </div>
  );
}

export function DropdownMenuLabel({ children }) {
  return <div className="px-4 py-2 text-sm font-semibold text-gray-700">{children}</div>;
}

export function DropdownMenuSeparator() {
  return <div className="border-t border-gray-200 my-1"></div>;
}

export function DropdownMenuItem({ children }) {
  return (
    <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
      {children}
    </div>
  );
}
