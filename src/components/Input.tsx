import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
  className?: string;
}

const Input: FC<InputProps> = ({
  placeholder,
  type,
  className = "",
  ...props
}) => {
  return (
    <input
      className={`h-8 w-[55%] border-none border-zinc-900 rounded-lg ${className}`}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
