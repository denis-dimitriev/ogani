import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLInputElement> {
  label?: string;
}

function InputForm({ label, type, onInput, value, id, placeholder }: Props) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[--gray]">
        {label}
      </label>
      <input
        id={id}
        className="w-full rounded border border-[#ccc] px-2.5 py-2 focus:border-[--indigo]"
        value={value}
        type={type}
        placeholder={placeholder}
        onInput={onInput}
      />
    </div>
  );
}

export default InputForm;
