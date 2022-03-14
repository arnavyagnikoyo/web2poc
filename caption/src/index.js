import React from 'react';
import './index.css';

export function Caption({ children, className, bold }) {
  return (
    <div className={`text-sm ${bold ? "font-bold" : ""} ${className || ""}`}>
      {" "}
      {children}{" "}
    </div>
  );
}
