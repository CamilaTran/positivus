import Image from 'next/image';
import { list } from './data';
import Button from '@/components/button';

const Navigation = () => {
    return <nav className='flex flex-col' aria-label="Main navigation">
        <div className="flex justify-between items-center">
            <Image src="./logos/logo-black-text.svg" alt='positivis logo' width={220} height={50} />


            <div className="flex items-center gap-10">
                <ul className="flex gap-10">
                    {list.map((i, index) => (
                        <li key={index}>
                            <a
                                aria-label={`Navigate to ${i.name}`}
                                href={i.link}
                                className="relative inline-block after:block after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                            >
                                {i.name}
                            </a>
                        </li>

                    ))}
                </ul>
                <Button content="Request a quote" variant="outlined" />
            </div>
        </div>

    </nav>
}

export default Navigation