import "./Paralex.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import FeedBack from "../FeedBack/FeedBack";

const Parallex = () => {
  return (
    <div className="parallex">
      <p className="subtitel">.TESTIMONIALS.</p>
      <p className="titel">Customers Testmonials</p>
      <div className="slides">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <FeedBack name={"taha"} role={"taha"} />
          </SwiperSlide>
          <SwiperSlide>
            <FeedBack name={"taha"} role={"fsdlkq"} />
          </SwiperSlide>
          <SwiperSlide>
            <FeedBack name={"taha"} role={"fsdlkq"} />
          </SwiperSlide>
          <SwiperSlide>
            <FeedBack name={"taha"} role={"fsdlkq"} />
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </div>
  );
};

export default Parallex;
