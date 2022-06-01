import React from 'react';

export default function BigMenu({ active }) {
  return (
    <div
      className={
        active
          ? 'absolute top-full w-full bg-[#f7f7f7] visible opacity-100'
          : 'invisible opacity-0 absolute'
      }
    >
      <div className="w-full max-w-[1130px] px-[15px] my-0 mx-auto relative">
        <div className="flex items-center justify-between">
          <h2 className="text-[18px] leading-[23px] text-[#4f4f4f] font-black py-3">
            Tất cả chuyên mục
          </h2>
        </div>
        <div className="border-t">
          <div className="flex">
            <ul className="w-[90%] pt-4 max-h-[90vh] overflow-scroll">
              <li className="flex flex-wrap gap-2">
                <ul>
                  <li className="py-2 text-[#9f224e] font-extrabold cursor-pointer hover:underline">
                    Thời sự
                  </li>
                  {[
                    'Chính trị',
                    'Dân sinh',
                    'Lao động - việc làm',
                    'Giao thông',
                  ].map((item) => (
                    <li className="py-2 cursor-pointer hover:underline">
                      {item}
                    </li>
                  ))}
                  <li className="text-[#757575] text-[13px] pt-[3px] hover:underline hover:text-[#087cce] cursor-pointer">
                    Xem thêm
                  </li>
                </ul>

                <ul>
                  <li className="py-2 text-[#9f224e] font-extrabold cursor-pointer hover:underline">
                    Thời sự
                  </li>
                  {[
                    'Chính trị',
                    'Dân sinh',
                    'Lao động - việc làm',
                    'Giao thông',
                  ].map((item) => (
                    <li className="py-2 cursor-pointer hover:underline">
                      {item}
                    </li>
                  ))}
                  <li className="text-[#757575] text-[13px] pt-[3px] hover:underline hover:text-[#087cce] cursor-pointer">
                    Xem thêm
                  </li>
                </ul>

                <ul>
                  <li className="py-2 text-[#9f224e] font-extrabold cursor-pointer hover:underline">
                    Thời sự
                  </li>
                  {[
                    'Chính trị',
                    'Dân sinh',
                    'Lao động - việc làm',
                    'Giao thông',
                  ].map((item) => (
                    <li className="py-2 cursor-pointer hover:underline">
                      {item}
                    </li>
                  ))}
                  <li className="text-[#757575] text-[13px] pt-[3px] hover:underline hover:text-[#087cce] cursor-pointer">
                    Xem thêm
                  </li>
                </ul>

                <ul>
                  <li className="py-2 text-[#9f224e] font-extrabold cursor-pointer hover:underline">
                    Thời sự
                  </li>
                  {[
                    'Chính trị',
                    'Dân sinh',
                    'Lao động - việc làm',
                    'Giao thông',
                  ].map((item) => (
                    <li className="py-2 cursor-pointer hover:underline">
                      {item}
                    </li>
                  ))}
                  <li className="text-[#757575] text-[13px] pt-[3px] hover:underline hover:text-[#087cce] cursor-pointer">
                    Xem thêm
                  </li>
                </ul>

                <ul>
                  <li className="py-2 text-[#9f224e] font-extrabold cursor-pointer hover:underline">
                    Thời sự
                  </li>
                  {[
                    'Chính trị',
                    'Dân sinh',
                    'Lao động - việc làm',
                    'Giao thông',
                  ].map((item) => (
                    <li className="py-2 cursor-pointer hover:underline">
                      {item}
                    </li>
                  ))}
                  <li className="text-[#757575] text-[13px] pt-[3px] hover:underline hover:text-[#087cce] cursor-pointer">
                    Xem thêm
                  </li>
                </ul>

                <ul>
                  <li className="py-2 text-[#9f224e] font-extrabold cursor-pointer hover:underline">
                    Thời sự
                  </li>
                  {[
                    'Chính trị',
                    'Dân sinh',
                    'Lao động - việc làm',
                    'Giao thông',
                  ].map((item) => (
                    <li className="py-2 cursor-pointer hover:underline">
                      {item}
                    </li>
                  ))}
                  <li className="text-[#757575] text-[13px] pt-[3px] hover:underline hover:text-[#087cce] cursor-pointer">
                    Xem thêm
                  </li>
                </ul>

                <ul>
                  <li className="py-2 text-[#9f224e] font-extrabold cursor-pointer hover:underline">
                    Thời sự
                  </li>
                  {[
                    'Chính trị',
                    'Dân sinh',
                    'Lao động - việc làm',
                    'Giao thông',
                  ].map((item) => (
                    <li className="py-2 cursor-pointer hover:underline">
                      {item}
                    </li>
                  ))}
                  <li className="text-[#757575] text-[13px] pt-[3px] hover:underline hover:text-[#087cce] cursor-pointer">
                    Xem thêm
                  </li>
                </ul>
              </li>
            </ul>

            <div className="border-l pl-3 pt-4 max-h-[90vh] overflow-scroll">
              <ul className="pb-4 border-b text-[16px] font-bold">
                {['Podcasts', 'Ảnh', 'Infographics'].map((item) => (
                  <li className="py-2 hover:underline">{item}</li>
                ))}
              </ul>

              <ul className="pb-4 border-b text-[16px] font-bold">
                {['Mới nhất', 'Xem nhiều', 'Tin nóng'].map((item) => (
                  <li className="py-2 hover:underline">{item}</li>
                ))}
              </ul>

              <ul className="border-b">
                {[
                  'Rao vặt',
                  'Startup',
                  'Mua ảnh',
                  'Vhome',
                  'eBox',
                  'eWork',
                ].map((item) => (
                  <li className="py-2 hover:underline">{item}</li>
                ))}
              </ul>

              <ul className="border-b">
                {[
                  'Liên hệ',
                  '✉️ Tòa soạn',
                  '🆕 Quảng cáo',
                  '🤝 Hợp tác bản quyền',
                ].map((item) => (
                  <li className="py-2 hover:underline">{item}</li>
                ))}
              </ul>

              <ul className="border-b">
                {[
                  'Liên hệ',
                  '✉️ Tòa soạn',
                  '🆕 Quảng cáo',
                  '🤝 Hợp tác bản quyền',
                ].map((item) => (
                  <li className="py-2 hover:underline">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
