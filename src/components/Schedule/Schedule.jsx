import classes from "./Schedule.module.css";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

const data = [1, 2, 3, 4, 5];

function searchData(data) {
  const today = new Date().getDay();
  const [day] = data.filter((day) => day === today);
  return day;
}

export default function Schedule() {
  return (
    <>
      <div className={classes.scheduleSwiper}>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
          spaceBetween={0}
          slidesPerView={1}
          initialSlide={searchData(data) - 1}
        >
          {data.map((dataItem, index) => (
            <SwiperSlide key={index}>
              <LightGallery download={false} counter={false}>
                <a href={`./img/Schedule/${dataItem}.jpg`}>
                  <img
                    className={classes.scheduleSwiperImg}
                    src={`./img/Schedule/${dataItem}.png`}
                  />
                </a>
              </LightGallery>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
