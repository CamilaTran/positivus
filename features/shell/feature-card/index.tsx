import Heading from "@/components/heading";
import ArrowIcon from "@/components/icons/arrow-icon";
import Image from "next/image";
import Button from "@/components/button";
import { useMemo } from "react";
import { themeStyle } from "./data";
import Link from "next/link";

interface FeatureCardProps {
    link: string;
    content: string;
    icon: string;
    index: number;

}


const FeatureCard = ({ link, content, icon, index }: FeatureCardProps) => {
    const theme = useMemo(() => {
        switch (index % 3) {
            case 0:
                return themeStyle.gray
            case 1:
                return themeStyle.green
            case 2:
                return themeStyle.black
            default:
                return themeStyle.green
        }
    }, [index])

    return (<div className={`rounded-[45px] border-1 border-t-1 border-b-4 border-black p-[3.125rem] w-full flex ${theme.card}`}>
        <div className="flex flex-col justify-between gap-30 flex-1">
            <Heading content={content} className={`text-3xl whitespace-pre-line ${theme.title}`} />
            <Link className="flex items-center gap-10" href={link} aria-label={`Learn more about ${content}`}>
                <Button
                    type="filled"
                    label={content}
                    className={`!w-10 !h-10 rounded-full relative !p-0 ${theme.icon.bg} group `}
                    icon={
                        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:rotate-45 transition duration-100">
                            <ArrowIcon color={theme.icon.fill} />
                        </div>
                    }
                />
                <span className={`text-xl text-black ${theme.icon.text}`}>Learn more</span>
            </Link>
        </div>

        <Image src={icon} alt={`${content} illustration`} width={210} height={100} />
    </div>
    )
}


export default FeatureCard