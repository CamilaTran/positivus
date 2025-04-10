interface ButtonProps {
    content: string;
    className?: string;
    type: "outlined" | "filled";
}

const buttonStyles = {
    outlined: "border-1 border-black hover:bg-black hover:text-white transition-all duration-300",
    filled: ""
}


const Button = ({ content, className = "", type }: ButtonProps) => {
    return (
        <button
            aria-label={content}
            className={`${buttonStyles[type] ?? ""}  ${className} rounded-[14px] text-lg py-5 px-9 cursor-pointer h-fit w-fit`}
        >
            {content}
        </button>
    )
}

export default Button