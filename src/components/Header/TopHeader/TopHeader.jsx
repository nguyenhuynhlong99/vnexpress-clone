import React, { useState } from 'react';
import { ImClock } from 'react-icons/im';
import { RiSearch2Line } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';
import { BsList } from 'react-icons/bs';
import BigMenu from '../BigMenu/BigMenu';

export default function TopHeader() {
  const [opened, setOpened] = useState(false);
  function handleClick() {
    setOpened(!opened);
  }

  return (
    <div className="flex items-center justify-center py-2 text-[14px] relative">
      <div className="w-full max-w-[1130px] flex justify-between px-4">
        <div className="flex items-center">
          <BsList
            className="block lg:hidden text-[25px] cursor-pointer"
            onClick={handleClick}
          />
          <img
            src="https://s1.vnecdn.net/vnexpress/restruct/i/v608/v2_2019/pc/graphics/logo.svg"
            alt="VnExpress - Bao tieng Viet nhieu nguoi xem nhat"
            className="px-3"
          />
          <span className="text-[#757575] px-3 border-l hidden lg:block">
            Thứ ba, 31/5/2022
          </span>
        </div>

        <div className="flex items-center ml-auto">
          <div className="flex gap-x-3 pr-3 border-r">
            <a
              href="/"
              className="block border flex items-center gap-x-1 text-[#757575] rounded p-1 hover:bg-slate-100 hover:text-[#222] px-2"
            >
              <ImClock className="text-[#757575]" />
              <span>Mới nhất</span>
            </a>
            <a
              href="/"
              className="block border flex items-center gap-x-1 text-[#757575] rounded p-1 hover:bg-slate-100 hover:text-[#222] px-2"
            >
              <span>International</span>
            </a>
          </div>
        </div>

        <div className="pl-3 flex items-center gap-x-5">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="w-[160px] h-[32px] border pr-5 pl-3 rounded-2xl placeholder:text-[#757575] outline-none"
            />
            <RiSearch2Line className="absolute right-2 top-2 text-base text-[#757575]" />
          </div>
          <div className="flex items-center gap-x-2">
            <FaUserAlt className="text-[#757575]" />
            <button className="text-[16px] text-[#4f4f4f] hover:text-sky-400">
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
      <BigMenu active={opened} />
    </div>
  );
}
