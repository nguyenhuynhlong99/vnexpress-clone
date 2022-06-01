import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="border-t-4 mt-3 py-3">
      <div className="w-full max-w-[1130px] my-0 mx-auto flex flex-col md:flex-row items-center md:justify-between gap-2">
        <div className="flex items-center">
          <span className="text-[14px]">Báo điện tử</span>
          <img
            src="https://s1.vnecdn.net/vnexpress/restruct/i/v608/v2_2019/pc/graphics/logo.svg"
            alt="VnExpress - Bao tieng Viet nhieu nguoi xem nhat"
            className="px-3"
          />
        </div>
        <div className="text-[#7f7f7f] text-[14px] flex items-center gap-2">
          <span className="inline-block px-2">RSS</span>
          <p className="border-l px-2">Theo dõi VnExpress trên </p>
          <BsFacebook />
          <AiFillTwitterCircle />
          <BsYoutube />
        </div>
      </div>
    </footer>
  );
}
