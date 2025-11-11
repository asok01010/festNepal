import React from "react";

interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ label, type = "text", value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col gap-1 mb-3">
      <label className="font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-gray-300 rounded p-2"
      />
    </div>
  );
};

export default Input;
