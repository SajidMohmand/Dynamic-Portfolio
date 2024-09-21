import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux'


const Contact = () => {

    const { portfolioData } = useSelector(state => state.root);
    const { contact } = portfolioData;

    return (
        <div>
            <SectionTitle title={"Say Hello"} />

            <div className="flex sm:flex-col items-center justify-between">
                <div className="flex flex-col">
                    <p className='text-tertiary '>{'{'}</p>
                    {Object.keys(contact).map((key) => (
                     key !== '_id' &&   <p className='ml-5'>
                            <span className='text-tertiary'>{key} : </span> <span className='text-tertiary'>{contact[key]}</span>
                        </p>
                    ))}
                    <p className='text-tertiary'>{"}"}</p>
                </div>

                <div className='h-[400px]'>
                    <dotlottie-player src="https://lottie.host/2e53dbab-3849-4787-9196-e82d2d9ed405/StnFGG860E.json" background="transparent" speed="1" autoplay></dotlottie-player>
                </div>
            </div>
        </div>
    )
}

export default Contact
