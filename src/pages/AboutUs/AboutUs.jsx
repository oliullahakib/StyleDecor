import React from 'react';
import SectionTitle from '../Shared/SectionTitle';
import MyDiv from '../../components/MyDiv';

const AboutUs = () => {
    return (
        <div className='flex-1 py-5'>
            {/* what is StyleDecor  */}
            <MyDiv className={'border  border-secondary w-2/3 rounded-bl-4xl rounded-tr-4xl p-3'}>
                <SectionTitle className={'text-lg text-center'} title={'What is StyleDecor?'} />
                <div>
                    <p className='w-2/3 text-center mx-auto mt-5 text-accent-content'>StyleDecor is a modern appointment management system for a local decoration company that offers both in-studio consultations and on-site decoration services for homes and ceremonies. Users can explore decoration packages, check decorator availability, select a date & time, choose a service mode, make payments, and track their service status.
                    </p>
                </div>
            </MyDiv>
            {/* why is StyleDecor  */}
            <MyDiv className={'border  border-secondary mt-5 px-5 rounded-bl-4xl rounded-tr-4xl p-3'}>
                <SectionTitle className={'text-lg text-center'} title={'Why is StyleDecor?'} />
                <div>
                    <p className='w-2/3 text-center mx-auto mt-5 text-accent-content'>Local decoration businesses often face major issues.StyleDecor solves these problems by providing
                    </p>
                </div>
                <div className='flex justify-between'>
                    <div className="issue">
                        <h3 className='text-lg font-bold'>Major Issue</h3>
                        <div className='px-5'>
                            <li>Walk-in crowd & long waiting times for consultations
                            </li>
                            <li>No online booking system for decoration services
                            </li>
                            <li>Difficulty managing multiple decorators and their specialties
                            </li>
                            <li>No system for on-site service assignment and coordination
                            </li>
                        </div>
                    </div>
                    <div className="solution">
                        <h3 className='text-lg font-bold'>Our Solutions</h3>
                         <div className=''>
                            <li>Smart appointment scheduling for consultations and services
                            </li>
                            <li>Decorator availability and specialty management
                            </li>
                            <li>On-site service coordination workflow
                            </li>
                            <li>Real-time project status updates
                            </li>
                            <li>Integrated payments for packages and services
                            </li>
                            <li>Powerful dashboard & analytics for business insights
                            </li>
                        </div>
                    </div>
                </div>
            </MyDiv>
        </div>
    );
};

export default AboutUs;