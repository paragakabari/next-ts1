'use client';
import Image from 'next/image';
import { FC } from 'react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'tippy.js/dist/tippy.css';

interface TeamMember {
  name: string;
  role: string;
  skills: string[];
  imageUrl: string;
  salary: string;
}

const team: TeamMember[] = [
  {
    name: 'Abhishek Gupta',
    role: '마케팅 · 2y+',
    skills: [
      '마케팅 콘텐츠 제작',
      '인스타그램 관리',
      '트위터 관리',
      '블로그 글 작성',
    ],
    imageUrl: '/images/profile.png',
    salary: '월 100만원',
  },
  {
    name: 'Parag A',
    role: '마케팅 · 3y+',
    skills: [
      '마케팅 콘텐츠 제작',
      '인스타그램 관리',
      '트위터 관리',
      '블로그 글 작성',
    ],
    imageUrl: '/images/profile.png',
    salary: '월 120만원',
  },
  {
    name: 'Jenish S',
    role: '마케팅 · 2y+',
    skills: [
      '마케팅 콘텐츠 제작',
      '인스타그램 관리',
      '트위터 관리',
      '블로그 글 작성',
    ],
    imageUrl: '/images/profile.png',
    salary: '월 150만원',
  },
];
const Sliders: FC = ({}) => {
  return (
    <div className="container mx-auto grid px-5 mobile:px-0  grid-cols-2 mobile:block tab:block">
      <section className=" py-12   text-white">
        <div
          className="text-sm bg-white text-blue-500 inline-block px-3 py-1 duration-500 rounded-full mb-4 font-semibold animate__fadeInUp wow animate__animated"
          data-wow-offset="300"
        >
          풀타임, 파트타임
        </div>
        <h1
          className="text-3xl md:text-5xl font-bold mb-4  duration-500 wow animate__animated animate__fadeInUp"
          data-wow-offset="400"
        >
          최고의 실력을 가진 외국인 인재를 찾고 계신가요?
        </h1>
        <p
          className="text-lg mb-6 wow animate__animated animate__fadeInUp duration-500"
          data-wow-offset="410"
        >
          법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
        </p>
        <a
          data-wow-offset="450"
          href="#"
          className="text-blue-800 underline font-medium hover:text-blue-900 wow animate__animated duration-500 animate__fadeInUp"
        >
          개발자가 필요하신가요?
        </a>
        <div>
          <section className=" text-gray-800 ">
            <div className="grid tab:grid-cols-1 grid-cols-3 gap-6 pt-5 mobile:grid-cols-1">
              {[
                {
                  title: '평균 월 120만원',
                  description: '임금을 해당 국가급 기준으로 계산합니다.',
                },
                {
                  title: '최대 3회 인력교체',
                  description: '막상 채용해보니 맞지 않아도 걱정하지 마세요.',
                },
                {
                  title: '평균 3일, 최대 10일',
                  description:
                    '급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.',
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className=" text-blue-900 p-3 border-t-2 border-[#FFFFFF33] wow  duration-700 animate__animated animate__fadeInUp delay-700"
                >
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
      <div className="relative px-6 md:px-24 py-12">
        {/* Tooltip for Salary */}

        {/* Swiper Carousel */}
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="swiper1"
        >
          {team.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-blue-100 text-blue-900 p-6 rounded-lg shadow-sm hover:shadow-md">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="w-40 h-40 rounded-full mx-auto mb-4"
                />
                <h3 className="font-bold text-lg text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-center text-sm text-gray-500 mb-4">
                  {member.role}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Sliders;
