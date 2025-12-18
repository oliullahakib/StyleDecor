import React from 'react';

const DecoratorCard = ({decorator}) => {

    return (
         <div >
                <div className='w-40 flex flex-col justify-center items-center mx-auto'>
                    <div className='w-20 relative'>
                        <img className='w-20 h-20 object-cover rounded-full border border-secondary' src={decorator.imageUrl} alt="decorator" />
                        <span className='absolute text-black px-2 top-0 -right-5 bg-secondary rounded-full'>
                            <span className=''>4☆</span>
                        </span>
                    </div>
                    <h3 className='text-accent font-semibold'>{decorator.name}</h3>
                    <p className='text-accent'>{decorator.service_type}</p>
                </div>
            </div>
    );
};

export default DecoratorCard;