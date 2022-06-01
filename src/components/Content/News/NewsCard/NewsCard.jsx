import React from 'react';
import { FaCommentAlt } from 'react-icons/fa';

export default function NewsCard({ title, text, comment, image }) {
  return (
    <div className="border-b py-3 text-[14px]">
      <h3 className="text-[15px] font-bold mb-2">{title}</h3>
      <div className="newsCard">
        <img src={image} alt="news" className="max-w-[145px] pb-2 pr-2" />
        <p>
          {text} <FaCommentAlt className="inline-block" />{' '}
          <span className="text-[#076db6]">{comment}</span>
        </p>
      </div>
    </div>
  );
}
