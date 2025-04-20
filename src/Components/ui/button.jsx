import React from "react";

export function Button({ children, className, ...props }) {
    return (
        <button
            className={`px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
