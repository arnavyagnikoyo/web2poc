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
    <div
      className={`text-sm  text-amber-dd ${bold ? "font-bold" : ""} ${
        className || ""
      }`}
    >
      {" "}
      {children}{" "}
    </div>
  );
}
export function CategoryBadge({ children, className }) {
  return (
    <div className={`text-xs  px-s py-xs bg-asphalt-light  ${className || ""}`}>
      {" "}
      {children}{" "}
    </div>
  );
}
export function Badge({ children, className }) {
  return (
    <div
      className={`text-xs  px-s py-xs bg-amber-light text-amber-darker  ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}
export function Rating({ children, className, bold }) {
  return (
    <div
      className={`flex items-center ${bold ? "font-bold" : ""} ${
        className || ""
      }`}
    >
      <Icon icon="star" className="text-emerald text-m inline-block mr-m" />
      <Subtitle2>2.5 (245)</Subtitle2>
    </div>
  );
}
export function IconBadge({ icon, className, children }) {
  return (
    <Badge className={`flex items-center ${className}`}>
      <Icon className="mr-0" icon={icon} />
      <Caption className="ml-m text-amber-darker">{children}</Caption>
    </Badge>
  );
}
export function Subtitle2({ children, className, bold }) {
  return (
    <div className={`text-m ${bold ? "font-bold" : ""} ${className || ""}`}>
      {" "}
      {children}{" "}
    </div>
  );
}
export function Inter({ children, className, bold }) {
  return (
    <div className={`text-sm ${bold ? "font-bold" : ""} ${className || ""}`}>
      {" "}
      {children}{" "}
    </div>
  );
}
export function Icon({ icon, className }) {
  return <i class={`fa fa-${icon} mr-m ${className}`}></i>;
}

export function HotelImage({ src, Multiplesrc }) {
  return (
    <div className="snap-mandatory snap-x flex overflow-x-auto overflow-hidden md:h-full md:w-80 rounded-lg">
      {/* {Multiplesrc.map((src) => ( */}
      <img src={src} className=" snap-center h-auto w-full object-cover  " />
      {/* ))} */}
    </div>
  );
}

export function PrimaryButton({ children, className, bold }) {
  return (
    <div
      className={`text-center text-base bg-amber-darker text-[white] font-semibold rounded-lg px-l py-m ${
        bold ? "font-bold" : ""
      } ${className || ""}`}
    >
      {" "}
      {children}{" "}
    </div>
  );
}
