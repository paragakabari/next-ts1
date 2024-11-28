import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="text-sm text-gray-600 mt-12 container mx-auto mobile:mt-[60px]">
      <div className="grid  grid-cols-4 mobile:grid-cols-2 gap-6 mb-8 tab:grid-cols-2 tab:px-5 mobile:px-0">
        <div>
          <p
            className="text-xs font-extrabold text-[#343741] mb-2.5 animate__fadeIn wow animate__animated "
            data-wow-offset="500"
          >
            상호명
          </p>
          <p className="text-[13px] font-extrabold text-[#5E626F]">
            하이퍼하이어
          </p>
          <p className="text-[13px] font-extrabold text-[#5E626F]">
            Hyperhire India Private Limited
          </p>
        </div>
        <div>
          <p className="text-xs font-extrabold text-[#343741] mb-2.5">
            대표 CEO
          </p>
          <p className="text-[13px] font-extrabold text-[#5E626F]">김주현</p>
          <p className="text-[13px] font-extrabold text-[#5E626F]">
            Juhyun Kim
          </p>
        </div>
        <div>
          <p className="text-xs font-extrabold text-[#343741] mb-2.5">
            사업자등록번호 CIN
          </p>
          <p className="text-[13px] font-extrabold text-[#5E626F]">
            427-86-01187
          </p>
          <p className="text-[13px] font-extrabold text-[#5E626F]">
            U74110DL2016PTC290812
          </p>
        </div>
        <div className="mobile:col-span-2">
          <p className="text-xs font-extrabold text-[#343741] mb-2.5">
            주소 ADDRESS
          </p>
          <p className="text-[13px] font-extrabold text-[#5E626F]">
            서울특별시 강남대로 479, 지하 1층 238호
          </p>
          <p className="text-[13px] font-extrabold text-[#5E626F]">
            D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi,
            110053 India
          </p>
        </div>
      </div>

      <p className="mt-8 tab:px-5 mobile:px-0 mobile:mt-5">© 2023 Hyperhire</p>
    </footer>
  );
};

export default Footer;
