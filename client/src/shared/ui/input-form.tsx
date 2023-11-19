import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLInputElement> {
  label?: string;
  error?: boolean;
  success?: boolean;
  message?: string;
}

function InputForm({
  label,
  onInput,
  value,
  id,
  placeholder,
  error,
  success,
  message,
}: Props) {
  return (
    <div className="relative box-border">
      <label
        htmlFor={id}
        className={`mb-1 block text-[--gray] ${error && "text-[--red]"}`}
      >
        {message || label}
      </label>
      <input
        id={id}
        className={`w-full rounded border border-[#ccc] px-2.5 py-2 focus:border-[--indigo] ${
          error && "border-2 border-[--danger]"
        } ${success && "border-[--success]  bg-[--success]"}`}
        value={value}
        placeholder={placeholder}
        onInput={onInput}
      />
    </div>
  );
}

export default InputForm;
