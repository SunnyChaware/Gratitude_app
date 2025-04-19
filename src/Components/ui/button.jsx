import React from "react";
import classNames from "classnames";

export function Button({ variant = "default", size = "md", className, children, ...props }) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded focus:outline-none";
  const variants = {
    default: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    ghost: "bg-transparent text-gray-900 hover:bg-gray-100",
  };
  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    icon: "p-2",
  };

  const classes = classNames(baseStyles, variants[variant], sizes[size], className);

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
