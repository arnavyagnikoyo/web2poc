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