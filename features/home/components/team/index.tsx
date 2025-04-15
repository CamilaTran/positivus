import Intro from "@/features/shell/title"
import membersList from "./data"
import TeamCard from "../member-card"
import Button from "@/components/button"

const Team = () => {
    return (
        <div className="">
            <Intro title="Team" description={<>Meet the skilled and experienced team behind our <br /> successful digital marketing strategies</>} />

            <div className="grid grid-cols-3 gap-10 mt-20 mb-10">
                {
                    membersList.map((info, index) => <TeamCard key={index} {...info} />)
                }
            </div>

            <Button content="See all team" className="bg-black text-white float-right clear-both" variant="filled" />

        </div>
    )
}

export default Team