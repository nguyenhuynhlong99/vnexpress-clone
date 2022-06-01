import React from 'react';

export default function NavItem({ text, subnav }) {
  return (
    <li className="navItem relative font-semibold text-[#4f4f4f] cursor-pointer">
      <span className="block py-[16.5px] whitespace-nowrap">{text}</span>
      <ul className="subnav absolute w-[190px] bg-white left-0 top-[100% + 20px] border-t border-rose-700 shadow-[0 2px 8px rgb(0 0 0 / 10%)] opacity-0 invisible z-10">
        {subnav.map((sn) => (
          <li className="py-[10px] px-[15px] whitespace-nowrap cursor-pointer hover:underline">
            {sn}
          </li>
        ))}
      </ul>
    </li>
  );
}
