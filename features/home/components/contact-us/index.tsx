import Intro from "@/features/shell/title"
import ContactForm from "../contact-form"

import Image from "next/image"

const ContactUs = () => {
    return (
        <section className="px-25 py-15 relative rounded-[45px] bg-gray-200 w-full overflow-x-hidden">
            <div>
                <Intro title="Contact Us" description={<>Connect with Us: Let&apos;s Discuss Your <br/>Digital Marketing Needs</>} />
                <div className="mt-20 max-w-[556px]">
                    <ContactForm />
                </div>
            </div>

            <div className="absolute -right-[23%] top-1/2 -translate-y-1/2">
                <Image alt="contact illustration" src="./contact-illustration.svg" width="650" height="648" />
            </div>
        </section >
    )
}

export default ContactUs