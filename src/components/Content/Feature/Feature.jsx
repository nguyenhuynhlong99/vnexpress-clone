import React from 'react';
import SubFeat from './SubFeat';
import { FaCommentAlt } from 'react-icons/fa';

export default function Feature() {
  return (
    <div className="border-b">
      <ul className="py-4 md:grid grid-cols-3">
        <SubFeat
          title="HLV Gong Oh-kyun: 'Việt Nam đã quên chức vô địch SEA Games'"
          text="Thuyền trưởng U23 Việt Nam khẳng định đội nhà đã gác lại thành công ở
        SEA Games để tập trung cho U23 châu Á."
          comment="27"
        />
        <SubFeat
          title="HLV Gong Oh-kyun: 'Việt Nam đã quên chức vô địch SEA Games'"
          text="Thuyền trưởng U23 Việt Nam khẳng định đội nhà đã gác lại thành công ở
        SEA Games để tập trung cho U23 châu Á."
          comment="27"
        />
        <li className="md:border-l-2 p-3">
          <span className="text-rose-800 font-semibold">Góc nhìn</span>
          <h4 className="text-[15px] font-bold py-1">Ngập lụt đô thị</h4>
          <p>
            Ngập lụt không thể giải quyết đơn giản bằng một vài biện pháp nhỏ
            lẻ.
          </p>
          <p className="mt-9 text-[#757575]">Trình Phương Quân</p>
          <p>
            <FaCommentAlt className="inline-block" />{' '}
            <span className="text-[#076db6]">30</span>
          </p>
        </li>
      </ul>
    </div>
  );
}
