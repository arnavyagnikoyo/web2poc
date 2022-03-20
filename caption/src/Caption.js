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