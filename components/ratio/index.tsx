
interface RatioInputProps {
    name: string;
    optionList: Array<{ value: any, label: string }>;
}


const RatioInput = ({ optionList, name }: RatioInputProps) => {
    return (
        <fieldset>
            <div className="flex gap-9">
                {optionList.map(({ value, label }) => (
                    <div key={value} className="flex gap-[0.875rem]">
                        <input type="radio" id="contactChoice2" name="contact" value="phone" className='cursor-pointer w-[1.75rem] h-[1.75rem] !border-black' />
                        <label htmlFor="contactChoice2" className="text-lg">{label}</label>
                    </div>
                ))}
            </div>
        </fieldset>
    )
}

export default RatioInput