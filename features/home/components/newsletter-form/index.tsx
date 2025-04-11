import Button from "@/components/button"
import Input from "@/components/input"

const NewsletterForm = () => {
    return (
        <form className="bg-gray-900 px-20 py-14 rounded-[14px] flex gap-5" aria-label="Newsletter subscription form">
            <Input placeholder="Email" name="email" />
            <Button content="Subscribe to news" type="filled" className="bg-green "/>
        </form>
    )
}

export default NewsletterForm