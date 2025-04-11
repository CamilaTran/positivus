import Intro from "@/features/shell/title"
import servicesList from "./data"
import FeatureCard from "@/features/shell/feature-card"

const Services = () => {
    return (
        <div className="">
            <Intro
                title="Services"
                description={
                    <>
                        At our digital marketing agency, we offer a range of services to <br />
                        help businesses grow and succeed online. These services include:
                    </>
                }
            />
            <div className="mt-20 mb-25 grid grid-cols-2 gap-10">
                {servicesList.map(({ link, icon, title }, index) => <FeatureCard key={index} content={title} icon={icon} link={link} index={index} />)}
            </div>
        </div>
    )
}

export default Services