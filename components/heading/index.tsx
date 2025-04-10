interface HeadingProps {
    content: string;
    className?: string;
}

const Heading = ({ content, className = "" }: HeadingProps) => {
    return <h2 className={`text-[2.5rem] text-black bg-green px-[7px] w-fit ${className}`}>{content}</h2>
}

export default Heading