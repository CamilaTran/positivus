interface Member {
    name: string;
    position: string;
    experience: string;
    image: string;
    linkedLink: string;
}

const membersList: Array<Member> = [
    {
        name: "John Smith",
        position: 'CEO and Founder',
        experience: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
        image: '/team/John_Smith.png',
        linkedLink: "#"
    },
    {
        name: "Jane Doe",
        position: 'Director of Operations',
        experience: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
        image: '/team/Jane_Doe.png',
        linkedLink: "#"
    },
    {
        name: "Michael Brown",
        position: 'Senior SEO Specialist',
        experience: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
        image: '/team/Michael_Brown.png',
        linkedLink: "#"
    },
    {
        name: "Emily Johnson",
        position: 'PPC Manager',
        experience: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
        image: '/team/Emily_Johnson.png',
        linkedLink: "#"
    },
    {
        name: "Brian Williams",
        position: 'Social Media Specialist',
        experience: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
        image: '/team/Brian_Williams.png',
        linkedLink: "#"
    },
    {
        name: "Sarah Kim",
        position: 'Content Creator',
        experience: '2+ years of experience in writing and editing \n Skilled in creating compelling, SEO-optimized content for various industries',
        image: '/team/Sarah_Kim.png',
        linkedLink: "#"
    },
]

export default membersList