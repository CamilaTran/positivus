import Button from "@/components/button"
import Input from "@/components/input"
import RatioInput from "@/components/ratio"
import typesList from "./data"

const ContactForm = () => {
    return (
        <form className="">
            <div className="flex gap-7 flex-col">
                <RatioInput optionList={typesList} name="type"/>

                <Input type="text" label="Name" placeholder="Name" name="name" />

                <Input type="text" label="Email" required placeholder="Email" name="email" />

                <Input type="text" label="Message" required placeholder="Message" name="message" as="textarea" />
            </div>

            <Button content="Send Message" variant="filled" className="w-full bg-black text-white mt-10" />

        </form>
    )
}

export default ContactForm