interface InputProps {
    name: string;
    placeholder: string;
    className?: string;
    label?: string;
    type?: 'text' | 'number' | 'password' | 'email';
    required?: boolean;
    as?: 'input' | 'textarea';
    rows?: number;
    value: number | string;
}


const Input = ({
    placeholder,
    className = '',
    name,
    label,
    type = 'text',
    required = false,
    as = 'input',
    rows = 4,
    value,
}: InputProps) => {
    const sharedClassNames = `border border-gray-300 rounded-[0.875rem] px-8 py-[21px] focus:outline-none focus:ring-1 focus:ring-green transition duration-200 placeholder:text-gray-300 bg-white ${className}`;

    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label htmlFor={name} className="text-base text-gray-700">
                    {label}
                </label>
            )}
            {as === 'textarea' ? (
                <textarea
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    aria-label={label ?? name}
                    rows={rows}
                    className={`${sharedClassNames} resize-none`}
                    value={value}
                />
            ) : (
                <input
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    aria-label={label ?? name}
                    type={type}
                    className={sharedClassNames}
                    value={value}
                />
            )}
        </div>
    );
};

export default Input;
