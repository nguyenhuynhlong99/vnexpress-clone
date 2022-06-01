import React from 'react';
import NewsCard from './NewsCard/NewsCard';

export default function News() {
  return (
    <section className="pt-3 flex flex-col md:flex-row">
      <div className="w-full md:w-9/12 border-b md:border-r md:pr-3">
        <NewsCard
          title="Phạm nhân 'vượt ngục' Triệu Quân Sự bị bắt"
          text="Gần 15h hôm nay, Triệu Quân Sự, phạm nhân mang án chung thân, bị bắt
          tại xã Yên Dương, huyện Hà Trung, sau gần một ngày trốn khỏi trại giam
          quân đội T-974."
          comment="157"
          image="https://i1-vnexpress.vnecdn.net/2022/06/01/trieuquansbbattaithanhhoa-1654-7382-7502-1654075060.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=iHe0BE3qhNkTLDuxBR5e3A"
        />

        <NewsCard
          title="Đại biểu Quốc hội đề nghị giảm tiếp thuế để kìm đà tăng giá xăng"
          text="Tại kỳ họp đang diễn ra, các đại biểu Quốc hội đề nghị Chính phủ trình Quốc hội xem xét, giảm thêm các loại thuế để kìm đà tăng sốc của giá xăng dầu."
          comment="157"
          image="https://i1-kinhdoanh.vnecdn.net/2022/06/01/giaxang16NgocThanh1-1654077912-8187-1654078982.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=qW06sPN-c_BGGIGBF9fR5w"
        />
      </div>

      <div className="pb-3 md:pl-4">
        <h3 className="text-[18px] underline underline-offset-2 decoration-rose-800 font-bold mb-3 py-3 md:py-0">
          Kinh doanh
        </h3>
        <div className="flex flex-col gap-2 md:flex-row">
          <img
            src="https://i1-kinhdoanh.vnecdn.net/2022/06/01/VuThiLuuMai-1654073760-2988-1654073982.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=JRNwuW6RrZ1oscstzjFpkw"
            alt="news"
            className="w-full max-w-[230px] pr-2 pb-2"
          />
          <p>
            <h5 className="font-bold">
              Gói phục hồi kinh tế 'thông qua nhanh, giải ngân lại quá chậm'
            </h5>
            <p className="text-[14px] text-[#222]">
              Các đại biểu sốt ruột khi gói phục hồi kinh tế được Quốc hội thông
              qua nhanh trong bối cảnh đặc biệt nhưng lại ...{' '}
            </p>
          </p>

          <p className="border-t border-b md:border-l md:border-t-0 md:border-b-0 pt-2 md:pl-2 md:pt-0">
            <h5 className="font-bold">
              Nga cắt một phần khí đốt đến Đức, Đan Mạch
            </h5>
            <p className="text-[14px] text-[#222]">
              Gazprom sẽ ngừng xuất khẩu khí đốt cho hai công ty năng lượng của
              Đức và Đan Mạch vì từ chối thanh toán bằng đồng ruble.
            </p>
          </p>
        </div>

        <ul className="list-disc grid md:grid-cols-3 grid-cols-1 gap-3 md:pl-3 py-3 font-bold text-[14px]">
          <li>Showbiz Việt đua kinh doanh bất động sản</li>
          <li>
            Ngành bảo hiểm toàn cầu thiệt hại 1,3 tỷ USD do xung đột ở Ukraine
          </li>
          <li>Xuất khẩu nông, lâm, thủy sản vượt 13 tỷ USD trong 5 tháng</li>
        </ul>
      </div>
    </section>
  );
}
