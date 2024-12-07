import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import { campusData } from "../../data/campusData";

const CampusSwiperComponent = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      speed={2000}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation={true}
      modules={[Autoplay, Navigation]}
    >
      {campusData.map((item) => (
        <>
          <SwiperSlide
            className="relative"
            style={{
              backgroundImage: `url(${item.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bottom-12 left-20 text-white">
              <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
              {/* <p className="text-lg font-semibold w-3/5">{item.description}</p> */}
            </div>
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  );
};

export default CampusSwiperComponent;
