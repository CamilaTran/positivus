import Button from "@/components/button"
import Input from "@/components/input"

const NewsletterForm = () => {
    return (
        <form className="bg-gray-900 px-20 py-14 rounded-[14px] flex gap-x-5 h-fit" aria-label="Newsletter subscription form">
            <Input placeholder="Email" name="email" className="border-white placeholder:text-white text-white max-w-72 !bg-transparent"/>
            <Button content="Subscribe to news" variant="filled" className="bg-green "/>
        </form>
    )
}

export default NewsletterForm