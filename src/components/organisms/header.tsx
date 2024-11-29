'use client';
import Image from 'next/image';
import { FC, useState } from 'react';

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleValiue = (value: string) => () => {
    setValue(value);
    setIsOpen(false);
  };

  return (
    <header className="container mx-auto px-5 flex justify-between items-center mobile:px-0  py-4">
      <div className="text-lg font-semibold text-white cursor-pointer">
        <Image
          src="/images/header.png"
          alt="Hyperhire Logo"
          width={100}
          height={100}
        />
      </div>
      <div className="flex items-center gap-10 mobile:hidden">
        <div className="relative inline-block text-left">
          <div onClick={handleDropdown}>
            <button
              type="button"
              className="inline-flex w-full justify-center gap-x-1.5  underline px-3 py-2 text-sm font-semibold  text-white"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              채용
              <svg
                className="-mr-1 size-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            style={{ display: isOpen ? 'block' : 'none' }}
          >
            <div className="py-1" role="none">
              <a
                onClick={handleValiue('채용')}
                className="block px-4 py-2 text-sm text-gray-700"
              >
                채용
              </a>
              <a
                onClick={handleValiue('해외 개발자 원격 채용')}
                className="block px-4 py-2 text-sm text-gray-700"
              >
                해외 개발자 원격 채용
              </a>
              <a
                onClick={handleValiue('외국인 원격 채용 (비개발 직군)')}
                className="block px-4 py-2 text-sm text-gray-700"
              >
                외국인 원격 채용 (비개발 직군)
              </a>
              <a
                onClick={handleValiue('한국어 가능 외국인 채용')}
                className="block px-4 py-2 text-sm text-gray-700"
              >
                한국어 가능 외국인 채용
              </a>
            </div>
          </div>
        </div>
        <a className="text-sm font-semibold  text-white">{value}</a>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-white text-blue-500 px-4 py-2 rounded-lg font-medium shadow-md hover:bg-gray-100">
          문의하기
        </button>
      </div>
    </header>
  );
};

export default Header;
