import Intro from "@/features/shell/title"
import { list } from "./data"
import Link from "next/link"
import ArrowIcon from "@/components/icons/arrow-icon"

const CaseStudies = () => {
    return (
        <section className="">
            <Intro
                title="Case Studies"
                description={<>Explore Real-Life Examples of Our Proven Digital Marketing <br /> Success through Our Case Studies</>} />

            <div className="mt-20 mb-35 bg-dark px-20 py-[4.375rem] rounded-[45px] flex gap-16">
                {
                    list.map(({ content, link }, index) => <article className="flex gap-16" key={index}>
                        <div className="flex flex-col gap-5">
                            <p className="text-lg text-white">{content}</p>
                            <Link href={link} className="group flex gap-4 items-center" aria-label={`Learn more case study number ${index}`}>
                                <span className="text-green text-xl">Learn more</span>
                                <div className="group-hover:rotate-45 transition duration-100 w-[17px] h-auto">
                                    <ArrowIcon color="#B9FF66" className="w-full h-full" />
                                </div>

                            </Link>
                        </div>

                        {index < list.length - 1 && <hr className="h-full w-1 bg-white" />}
                    </article>)
                }

            </div>
        </section>
    )
}

export default CaseStudies