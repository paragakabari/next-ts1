'use client';
import Image from 'next/image';
import { FC } from 'react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from 'swiper/react';
const FeatureSection: FC = () => {
  return (
    <section className=" text-gray-800 container mx-auto py-2 pb-[80px] px-5 mobile:px-0 ">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className=""
      >
        <div className="">
          {[
            {
              title: '평균 월 120만원',

              img: './images/icon-marketing.svg',
            },
            {
              title: '최대 3회 인력교체',
              img: './images/icon-marketing.svg',
            },
            {
              title: '평균 3일, 최대 10일',
              img: './images/icon-marketing.svg',
            },
            {
              title: '평균 월 120만원',
              img: './images/icon-marketing.svg',
            },
            {
              title: '최대 3회 인력교체',
              img: './images/icon-marketing.svg',
            },
            {
              title: '평균 3일, 최대 10일',
              img: './images/icon-marketing.svg',
            },
          ].map((feature, idx) => (
            <SwiperSlide key={idx}>
              <div
                key={idx}
                data-wow-offset="450"
                className="border-2 border-[#FFFFFF33] text-blue-900 p-2 rounded-lg shadow-sm hover:shadow-md wow animate__animated duration-500 animate__fadeInUp"
              >
                <div className="flex gap-2 align-items-center">
                  <div className="text-3xl  bg-[#81b5bc] h-[40px] w-[40px] flex align-baseline justify-center rounded-lg p-3">
                    <Image
                      src={feature.img}
                      width={20}
                      height={20}
                      alt={feature.title}
                    />
                  </div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default FeatureSection;
