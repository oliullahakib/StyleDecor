import React from 'react'
import Marquee from "react-fast-marquee";
import SectionTitle from '../../Shared/SectionTitle';
import MyDiv from '../../../components/MyDiv';


const AllCategories = () => {
    return (
        <MyDiv>
            <SectionTitle className={'text-center mb-8'} title="All Categories"/>
            <Marquee>
                {/* category 1  */}
                <div>
                    <img className='max-w-40 mx-10' src="https://cbbcfocus.b-cdn.net/wp-content/uploads/2023/10/shutterstock_549055441.jpg" alt="" />
                    <p className='text-center mt-2'>Home</p>
                </div>
                {/* category 2  */}
                <div>
                    <img className='max-w-40 mx-10' src="https://cloudfrontgharpediabucket.gharpedia.com/uploads/2017/12/Home-Wedding-Floral-Decor-15-0503010007.jpg" alt="" />
                    <p className='text-center mt-2'>Wedding</p>
                </div>
                {/* category 3  */}
                <div>
                    <img className='max-w-40 mx-10 ' src="https://floodlightz.com/wp-content/uploads/2024/08/Office-Decoration.png" alt="" />
                    <p className='text-center mt-2'>Office</p>
                </div>
                {/* category 4  */}
                <div>
                    <img className='max-w-40 mx-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKjMKcvzIqDLGfiFP058jlDtZEbem0a5_ltw&s" alt="" />
                    <p className='text-center mt-2'>Seminar</p>
                </div>
                {/* category 5  */}
                <div>
                    <img className='max-w-40 mx-10' src="https://i.pinimg.com/736x/35/84/a0/3584a044f1f8aa6396e791c9887690be.jpg" alt="" />
                    <p className='text-center mt-2'>Meeting</p>
                </div>
            </Marquee>
        </MyDiv>

    )
}

export default AllCategories