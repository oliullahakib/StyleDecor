import React from 'react';
import MyDiv from '../../../components/MyDiv';
import SectionTitle from '../../Shared/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import DecoratorCard from './DecoratorCard/DecoratorCard';
import Loading from '../../../components/Loading';

const TopDecorators = () => {
    const { data: decorators, isLoading } = useQuery({
        queryKey: ['decorator'],
        queryFn: async () => {
            const res = await axios('https://style-decor-server-iota.vercel.app/decorators/public')
            return res.data
        }
    })

    if (isLoading) return <Loading />
    return (
        <MyDiv className={''}>
            <SectionTitle className={'text-center'} title={'Top Decorators'} />
            <div className='md:w-3xl mx-auto flex flex-col md:flex-row gap-5 justify-center mt-8'>
                {decorators.map(decorator => <DecoratorCard decorator={decorator} key={decorator._id} />)}
            </div>
        </MyDiv>
    );
};

export default TopDecorators;