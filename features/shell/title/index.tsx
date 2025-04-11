import Heading from "@/components/heading"

interface IntroProps {
    title: string;
    description: string | React.ReactElement;
}

const Intro = ({ description, title }: IntroProps) => {
    return (
        <div className="flex gap-10 items-center">
            <Heading content={title} />
            <span className="text-black whitespace-pre-line">{description}</span>
        </div>
    )
}

export default Intro