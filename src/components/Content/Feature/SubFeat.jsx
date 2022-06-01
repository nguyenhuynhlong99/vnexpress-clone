import React from 'react';
import { FaCommentAlt } from 'react-icons/fa';

export default function SubFeat({ title, text, comment }) {
  return (
    <li className="p-3">
      <h4 className="text-[15px] font-bold pb-2">{title}</h4>
      <p>
        {text}
        <FaCommentAlt className="inline-block" />{' '}
        <span className="text-[#076db6]">{comment}</span>
      </p>
    </li>
  );
}
