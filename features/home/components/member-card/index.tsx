import Link from "next/link";
import Image from "next/image";
import LinkedIcon from "@/components/icons/linked-icon";

import './styles.scss'

interface MemberCardProps {
    name: string;
    position: string;
    experience: string;
    image: string;
    linkedLink: string;
}



const MemberCard = ({ name, position, experience, image, linkedLink }: MemberCardProps) => {
    return (
        <article className="border-1 border-b-4 border-black py-10 rounded-[45px] px-9 w-fit">
            <div className="flex gap-5">
                <div className="relative w-[98px] h-[98px]">
                    <div className="mask">
                        <Image src={image} alt={`Profile image ${name}`} width={98} height={98} />
                        <div className="absolute inset-0 bg-[#A7DF63] mix-blend-multiply opacity-80 pointer-events-none rounded-none" />
                    </div>

                    <div className="absolute -z-1 -right-2 top-2">
                        <Image src="/team/flower-mask.png" alt="flower-below" width={98} height={98} />
                    </div>
                </div>
                <div className="flex flex-col justify-between flex-1">
                    <Link href={linkedLink} aria-label={`Navigate to linked profile of ${name}`} className="flex justify-end">
                        <LinkedIcon bgColor="black" textColor="#B9FF66" />
                    </Link>

                    <div className="">
                        <h4 className="text-xl font-medium">{name}</h4>
                        <p className="text-lg">{position}</p>
                    </div>


                </div>
            </div>

            <hr className="w-full h-[1px] bg-black my-7" />
            <p className="text-lg">{experience}</p>
        </article>
    )
}

export default MemberCard