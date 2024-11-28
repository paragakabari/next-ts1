import Image from 'next/image';
import { FC } from 'react';

const Service: FC = () => {
  return (
    <div className="flex gap-7 container mx-auto px-5 mobile:block mobile:px-0 tab:block">
      <div>
        {/* Header */}
        <div className=" mb-16 mobile:mb-5">
          <div className="mb-4 mobile:mb-0">
            <Image
              src="/images/logo.svg"
              alt="Hyperhire Logo"
              unoptimized
              width={100}
              height={100}
              className="w-2/4 h-16 tab:max-w-[220px]"
            />
          </div>
          <h1 className="text-xl text-gray-800 font-semibold mobile:text-sm mobile:max-w-[247px]">
            우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
          </h1>
        </div>

        {/* Contact Information */}
        <div className="">
          <p className="text-sm text-gray-600">010-0000-0000</p>
          <p className="text-sm text-gray-600">aaaaa@naver.com</p>
        </div>
      </div>

      {/* Services Grid */}
      <div>
        <div className="grid mobile:grid-cols-2 tab:grid-cols-2 mobile:gap-2 grid-cols-4 gap-6 ">
          {[
            { title: '해외 개발자 원격 채용', icon: './images/icon-code.svg' },
            {
              title: '외국인 원격 채용 (비개발)',
              icon: './images/icon-avatar.svg',
            },
            {
              title: '한국어 가능한 외국인 채용',
              icon: './images/icon-kor.svg',
            },
            {
              title: '해외 개발자 활용 서비스',
              icon: './images/icon-gear.svg',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl mb-4 bg-[#EFF1F6] h-[40px] w-[40px] flex align-baseline justify-center rounded-lg p-3">
                <Image
                  src={service.icon}
                  width={20}
                  height={20}
                  alt={service.title}
                  unoptimized
                />
              </div>
              <h4 className="text-[14px] mobile:h-[42px] tab:text-left mobile:text-left font-semibold text-gray-800 text-center">
                {service.title}
              </h4>
              <button className="mt-4 text-blue-600 hover:underline text-sm flex gap-1">
                바로가기
                <img src="./images/right.svg" alt="" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
