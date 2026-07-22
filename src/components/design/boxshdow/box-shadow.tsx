"use client";
import style from "./box-shadow.module.css";

export const BoxShadow = () => {
  const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);
  return (
    <div className="grid grid-cols-8 gap-4 p-4">
      {Array.from({ length: 15 }, (_: any, i: number) => (
        <div
          key={i}
          className={`cursor-pointer p-6 ${style.boxShadow} ${style[`box-shadow-${i + 1}`]}`}
        onClick={() => copyToClipboard(`box-shadow-${i + 1}`)}
        >
          Shadow {i + 1}
        </div>
      ))}
    </div>
  );
};