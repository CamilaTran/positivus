import { ReactElement } from "react";

interface ButtonProps {
    content?: string;
    className?: string;
    variant: "outlined" | "filled";
    icon?: ReactElement;
    label?: string;
    type?: 'button' | 'submit'
}

const buttonStyles = {
    outlined: "border-1 border-black hover:bg-black hover:text-white transition-all duration-300",
    filled: ""
}


const Button = ({ content, className = "", variant, icon, label = "", type="button" }: ButtonProps) => {
    return (
        <button
            aria-label={content ?? label}
            type={type}
            className={`rounded-[14px] text-lg py-5 px-9 cursor-pointer h-fit w-fit ${buttonStyles[variant] ?? ""}  ${className} `}
        >
            {icon}
            {content}
        </button>
    )
}

export default Button