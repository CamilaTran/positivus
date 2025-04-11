import Image from "next/image"
import { list as menuList } from "../navigation/data"
import { socialList } from "./data"
import ContactInfo from "@/features/home/components/contact-info"
import NewsletterForm from "@/features/home/components/newsletter-form"


const Footer = () => {
    return (
        <footer className="bg-dark px-20 py-14 rounded-t-[45px]" aria-label="footer">
            <div className="flex justify-between">
                <Image src="./logos/logo-white-text.svg" width={180} alt="positivis logo" height={29} />


                <div className="flex gap-10">
                    {menuList.map((i, index) => (
                        <a href={i.link} key={index} className="text-white underline text-lg" aria-label={`Navigate to ${i.name}`}>
                            {i.name}
                        </a>
                    ))}
                </div>


                <ul className="flex gap-5">
                    {socialList.map(({ href, name, icon: Icon }) => (
                        <a key={name} href={href} aria-label={name}>
                            <Icon className="w-6 h-6" />
                        </a>
                    ))}
                </ul>
            </div>

            <div className="flex justify-between mt-17">
                <div className="max-w-83">
                    <ContactInfo />
                </div>

                <NewsletterForm />

            </div>

            <div className="border-[0.5px] border-white my-12"></div>


            <div className="text-lg text-white flex gap-10">
                <p className="text-lg text-white" aria-label="Copyright notice">© {new Date().getFullYear()} Positivus. All Rights Reserved.</p>
                <a href="" className="underline" aria-label="Read our privacy policy">Privacy Policy</a>
            </div>

        </footer>
    )
}

export default Footer