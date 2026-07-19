import React from "react";

export type InputProps = {
  label?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  label,
  className,
  ...props
}: InputProps) {
  return (
    <div className="sm:col-span-4">
      {label && (
        <label className="block text-sm/6 font-medium">
          {label}
        </label>
      )}

      <div className="mt-2">
        <div className="flex border border-gray-500 items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
          <input
            className={`block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base placeholder:text-gray-500 focus:outline-none sm:text-sm/6 ${className ?? ""}`}
            {...props}
          />
        </div>
      </div>
    </div>
  );
}