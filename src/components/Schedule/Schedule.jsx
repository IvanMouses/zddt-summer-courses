import classes from "./Schedule.module.css";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

export default function Schedule() {
  return (
    <>
      <div className={classes.scheduleSwiper}>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
          spaceBetween={0}
          slidesPerView={1}
        >
          <SwiperSlide>
            <LightGallery download={false} counter={false}>
              <a href="./img/Schedule/1.jpg">
                <img
                  className={classes.scheduleSwiperImg}
                  alt="Понедельник"
                  src="./img/Schedule/1.png"
                />
              </a>
            </LightGallery>
          </SwiperSlide>
          <SwiperSlide>
            <LightGallery download={false} counter={false}>
              <a href="./img/Schedule/2.jpg">
                <img
                  className={classes.scheduleSwiperImg}
                  alt="Вторник"
                  src="./img/Schedule/2.png"
                />
              </a>
            </LightGallery>
          </SwiperSlide>
          <SwiperSlide>
            <LightGallery download={false} counter={false}>
              <a href="./img/Schedule/3.jpg">
                <img
                  className={classes.scheduleSwiperImg}
                  alt="Среда"
                  src="./img/Schedule/3.png"
                />
              </a>
            </LightGallery>
          </SwiperSlide>
          <SwiperSlide>
            <LightGallery download={false} counter={false}>
              <a href="./img/Schedule/4.jpg">
                <img
                  className={classes.scheduleSwiperImg}
                  alt="Четверг"
                  src="./img/Schedule/4.png"
                />
              </a>
            </LightGallery>
          </SwiperSlide>
          <SwiperSlide>
            <LightGallery download={false} counter={false}>
              <a href="./img/Schedule/5.jpg">
                <img
                  className={classes.scheduleSwiperImg}
                  alt="Пятница"
                  src="./img/Schedule/5.png"
                />
              </a>
            </LightGallery>
          </SwiperSlide>
          <SwiperSlide>
            <LightGallery download={false} counter={false}>
              <a href="./img/Schedule/6.jpg">
                <img
                  className={classes.scheduleSwiperImg}
                  alt="Суббота"
                  src="./img/Schedule/6.png"
                />
              </a>
            </LightGallery>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
