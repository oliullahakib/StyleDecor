
import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = ({services}) => {
    return (
        <Swiper
            pagination={{
                type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={
                {
                    delay: 3000,
                    disableOnInteraction: false,

                }
            }
            loop={true}
            centeredSlides={true}
            className="mySwiper flex justify-center items-center"
        >
             {
                    services.map((service, i) => <SwiperSlide key={i}>
                        <div className='flex justify-center items-center my-8'>
                            <img className='h-52 lg:h-[500px] max-w-3xl object-cover' src={service.imageUrl} />
                        </div>
                    </SwiperSlide>)
                }
        </Swiper>
    );
};

export default Banner;