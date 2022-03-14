import React from "react";

export function Subititle1({ children, className, bold }) {
  return (
    <div className={`text-base ${bold ? "font-bold" : ""} ${className || ""}`}>
      {" "}
      {children}{" "}
    </div>
  );
}

export function Caption({ children, className, bold }) {
  return (
    <div className={`text-sm ${bold ? "font-bold" : ""} ${className || ""}`}>
      {" "}
      {children}{" "}
    </div>
  );
}
export function Icon({ icon }) {
  return <i class={`fa fa-${icon} mr-l`}></i>;
}
export function PrimaryButton({ children, className, bold }) {
  return (
    <div
      className={`text-arnav bg-amber-darker text-[white] font-semibold rounded-lg px-l py-m ${
        bold ? "font-bold" : ""
      } ${className || ""}`}
    >
      {" "}
      {children}{" "}
    </div>
  );
}
