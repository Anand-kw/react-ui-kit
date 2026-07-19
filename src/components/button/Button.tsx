"use client";
export default function Button({
  children,
  title = "Button",
  onClick,
  className,
  type = "button",
}: {
  children?: React.ReactNode;
  title?:string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
    >
      {children??title}
    </button>
  );
}
