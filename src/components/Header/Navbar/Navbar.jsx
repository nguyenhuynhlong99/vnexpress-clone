import React, { useRef, useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsList } from 'react-icons/bs';
import BigMenu from '../BigMenu/BigMenu';
import NavItem from './NavItem';

export default function Navbar() {
  const navEl = useRef();

  const sticky = navEl.offsetTop;
  window.addEventListener('scroll', function () {
    if (window.pageYOffset >= sticky) {
      navEl.classList.add('sticky');
    } else {
      navEl.classList.remove('sticky');
    }
  });

  const [opened, setOpened] = useState(false);
  function handleClick() {
    setOpened(!opened);
  }

  return (
    <nav
      ref={navEl}
      className="relative border-t border-b w-full text-[14px] flex items-center hidden lg:block"
    >
      <ul className="w-full max-w-[1370px] list-none flex items-center justify-evenly">
        <li className="bg-slate-300 border-none rounded-full w-[24px] h-[24px] flex items-center justify-center hover:bg-red-800">
          <a href="/">
            <AiFillHome className="text-[#757575] hover:text-white" />
          </a>
        </li>
        <NavItem
          text="Thời sự"
          subnav={[
            'Chính trị',
            'Dân sinh',
            'Lao động - Việc làm',
            'Giao thông',
          ]}
        />
        <NavItem
          text="Góc nhìn"
          subnav={['Bình luận nhiều', 'Covid 19', 'Chính trị & chính sách']}
        />
        <NavItem
          text="Thế giới"
          subnav={['Tư liệu', 'Phân tích', 'Cuộc sống đó đây', 'Quân sự']}
        />
        <NavItem
          text="Video"
          subnav={['Thời sự', 'Thể thao', 'Du lịch', 'Giải trí']}
        />
        <NavItem text="Podcasts" subnav={['Úp mở 18+', 'Ly hôn']} />
        <NavItem
          text="Kinh doanh"
          subnav={['Quốc tế', 'Doanh nghiệp', 'Bất động sản', 'Giao thông']}
        />
        <NavItem text="Giải trí" subnav={['Video', 'Phim', 'Nhạc']} />
        <NavItem
          text="Thể thao"
          subnav={['Bóng đá', 'Sea Games 31', 'Tennis', 'Bóng rổ', 'EPL']}
        />
        <NavItem
          text="Pháp luật"
          subnav={['Hồ sơ phá án', 'Tư vấn', 'Video']}
        />
        <NavItem
          text="Du lịch"
          subnav={['Điểm đến', 'Ẩm thực', 'Ảnh', 'Ăn và chơi', 'Cẩm nang']}
        />
        <li
          onClick={handleClick}
          className="flex items-center cursor-pointer text-[#bdbdbd] hover:text-rose-800"
        >
          <span className="px-1">Tất cả</span>
          <BsList className="text-[20px]" />
        </li>
      </ul>
      <BigMenu active={opened} />
    </nav>
  );
}
