import Button from "@/components/button";
import Image from "next/image";

const CallToAction = () => {
    return <section className="bg-gray-200 rounded-[45px] flex  p-15 !pr-0 relative">
        <div className="flex flex-col gap-[1.625rem] max-w-125">
            <h3 className="text-3xl text-black">Let’s make things happen</h3>
            <p className="text-lg">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
            <Button content="Get your free proposal" type="filled" className="" label="Get your free proposal"/>
        </div>
        <div className="absolute -top-5 right-33">
            <Image alt="proposal illustration" src='./proposal-illustration.svg' width={359} height={395} />
        </div>
    </section>
}

export default CallToAction;