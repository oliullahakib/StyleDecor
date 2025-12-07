
import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
    const bannerImg = ["https://img.freepik.com/premium-photo/widding-couple-outside_141438-1581.jpg", "https://mir-s3-cdn-cf.behance.net/projects/404/49eaca184847621.Y3JvcCw5ODEsNzY4LDE5Miww.png", "https://static.vecteezy.com/system/resources/thumbnails/069/957/758/small/a-man-and-woman-in-front-of-a-floral-backdrop-photo.jpg"]
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
                    bannerImg.map((img, i) => <SwiperSlide key={i}>
                        <div className='flex justify-center items-center my-8'>
                            <img className='h-52 lg:h-[500px] max-w-3xl object-cover' src={img} />
                        </div>
                    </SwiperSlide>)
                }
        </Swiper>
    );
};

export default Banner;