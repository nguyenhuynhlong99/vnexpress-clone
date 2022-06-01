import React from 'react';
import { FaCommentAlt } from 'react-icons/fa';

export default function Article() {
  return (
    <article className="md:flex lg:items-center bg-[#f7f7f7]">
      <div>
        <img
          src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="news"
          className="max-w-[440px]"
        />
      </div>
      <div className="p-3">
        <h3 className="text-[24px] font-bold">
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        </h3>
        <p className="py-3 text-[14px] text-[#222]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non amet iure
          cupiditate aperiam nobis hic reiciendis sunt minus sit ad. Error
          assumenda incidunt omnis veniam nobis saepe rerum dolores amet, quidem
          voluptate consequuntur dignissimos fuga iure ad maxime blanditiis
          odit.
        </p>
        <p className="text-[#757575] text-[14px]">
          <span className="inline-block pr-1">3 giờ trước</span>
          <span className="inline-block px-1">IT</span>
          <span className="inline-block px-1">
            <FaCommentAlt className="inline-block" />
            <span className="text-[#076db6]"> 40</span>
          </span>
        </p>
      </div>
    </article>
  );
}
