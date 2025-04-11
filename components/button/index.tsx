import { ReactElement } from "react";

interface ButtonProps {
    content?: string;
    className?: string;
    type: "outlined" | "filled";
    icon?: ReactElement;
    label?: string;
}

const buttonStyles = {
    outlined: "border-1 border-black hover:bg-black hover:text-white transition-all duration-300",
    filled: ""
}


const Button = ({ content, className = "", type, icon, label = "" }: ButtonProps) => {
    return (
        <button
            aria-label={content ?? label}
            className={`rounded-[14px] text-lg py-5 px-9 cursor-pointer h-fit w-fit ${buttonStyles[type] ?? ""}  ${className} `}
        >
            {icon}
            {content}
        </button>
    )
}

export default Button