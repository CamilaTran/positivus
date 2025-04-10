import Heading from "@/components/heading"

const ContactInfo = () => {
    return (
        <section className="text-lg text-white" aria-labelledby="contact-heading">
            <Heading content="Contact us:" className="!text-lg" />
            <address className="flex gap-5 flex-col mt-7 not-italic">
                <p>Email: <a href="mailto:info@positivus.com">info@positivus.com</a></p>
                <p>Phone: <a href="tel:555-567-8901">555-567-8901</a></p>
                <p>Address: 1234 Main St
                    Moonstone City, Stardust State 12345</p>
            </address>

        </section>
    )
}

export default ContactInfo