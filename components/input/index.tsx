interface InputProps {
    name: string;
    placeholder: string;
    className?: string;
    label?: string;
    type?: 'text' | 'number' | 'password';
    required?: boolean;
}

const Input = ({ placeholder, className, name, label, type, required = false }: InputProps) => {
    return (
        <div className="">
            {label && <label htmlFor={name}>{label}</label>}
            <input className={`${className} border-1 border-white rounded-[0.875rem] max-w-72 px-8 py-[21px] placeholder:text-white text-white focus:outline-none focus:ring-1 focus:ring-green transition duration-200`} placeholder={placeholder} name={name} aria-label={label ?? name ?? ""} type={type} required={required} />
        </div>
    )
}

export default Input