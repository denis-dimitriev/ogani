import { HTMLProps, useEffect, useRef } from "react";

interface Props extends HTMLProps<HTMLInputElement> {
  label?: string;
  subLabel?: string;
  error?: boolean;
  success?: boolean;
  message?: string;
  clear?: boolean;
}

function InputForm({
  label,
  subLabel,
  onInput,
  id,
  type,
  autoFocus,
  placeholder,
  error,
  success,
  message,
  disabled,
  clear,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }, [clear]);

  return (
    <div className="relative box-border">
      <label
        htmlFor={id}
        className={`mb-1 block text-[--gray] ${error && "text-[--red]"}`}
      >
        {message || label}
        {subLabel && <span className="text-[12px]">{` ${subLabel}`}</span>}
      </label>
      <input
        id={id}
        type={type}
        className={`w-full rounded border border-[#ccc] px-2.5 py-2 focus:border-[--indigo] ${
          error && "border-2 border-[--danger]"
        } ${success && "border-[--success]  bg-[--success]"}`}
        ref={inputRef}
        autoFocus={autoFocus}
        placeholder={placeholder}
        disabled={disabled}
        onInput={onInput}
      />
    </div>
  );
}

export default InputForm;
