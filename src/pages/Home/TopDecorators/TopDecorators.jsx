import React from 'react';
import MyDiv from '../../../components/MyDiv';
import SectionTitle from '../../Shared/SectionTitle';

const TopDecorators = () => {
    return (
        <MyDiv className={'my-10'}>
            <SectionTitle className={'text-center'} title={'Top Decorators'} />
            <div className='w-3xl mx-auto flex justify-center mt-5'>
                {/* card1 */}
            <div >
                <div className='w-40 flex flex-col justify-center items-center mx-auto'>
                    <div className='w-20 relative'>
                        <img className='w-20 h-20 object-cover rounded-full border border-secondary' src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fHww" alt="decorator" />
                        <span className='absolute px-2 top-0 -right-5 bg-amber-200 rounded-full'>
                            <span className=''>4☆</span>
                        </span>
                    </div>
                    <h3 className='text-accent font-semibold'>Abisak Sharma</h3>
                    <p className='text-sm text-accent '>Wedding Manager</p>
                </div>
            </div>
            {/* card1 */}
            <div >
                <div className='w-40 flex flex-col justify-center items-center mx-auto'>
                    <div className='w-20 relative'>
                        <img className='w-20 h-20 object-cover rounded-full border border-secondary' src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fHww" alt="decorator" />
                        <span className='absolute px-2 top-0 -right-5 bg-amber-200 rounded-full'>
                            <span className=''>4☆</span>
                        </span>
                    </div>
                    <h3 className='text-accent font-semibold'>Abisak Sharma</h3>
                </div>
            </div>
            {/* card1 */}
            <div >
                <div className='w-40 flex flex-col justify-center items-center mx-auto'>
                    <div className='w-20 relative'>
                        <img className='w-20 h-20 object-cover rounded-full border border-secondary' src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fHww" alt="decorator" />
                        <span className='absolute px-2 top-0 -right-5 bg-amber-200 rounded-full'>
                            <span className=''>4☆</span>
                        </span>
                    </div>
                    <h3 className='text-accent font-semibold'>Abisak Sharma</h3>
                </div>
            </div>
            </div>
        </MyDiv>
    );
};

export default TopDecorators;