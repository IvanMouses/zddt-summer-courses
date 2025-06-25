import classes from "./Schedule.module.css";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

const data = [
  {
    id: 1,
    date: new Date("05-29-2025").toDateString(),
  },
  {
    id: 2,
    date: new Date("05-30-2025").toDateString(),
  },
  {
    id: 3,
    date: new Date("06-02-2025").toDateString(),
  },
  {
    id: 4,
    date: new Date("06-03-2025").toDateString(),
  },
  {
    id: 5,
    date: new Date("06-04-2025").toDateString(),
  },
  {
    id: 6,
    date: new Date("06-05-2025").toDateString(),
  },
  {
    id: 7,
    date: new Date("06-06-2025").toDateString(),
  },
  {
    id: 8,
    date: new Date("06-09-2025").toDateString(),
  },
  {
    id: 9,
    date: new Date("06-10-2025").toDateString(),
  },
  {
    id: 10,
    date: new Date("06-11-2025").toDateString(),
  },
  {
    id: 11,
    date: new Date("06-16-2025").toDateString(),
  },
  {
    id: 12,
    date: new Date("06-17-2025").toDateString(),
  },
  {
    id: 13,
    date: new Date("06-18-2025").toDateString(),
  },
  {
    id: 14,
    date: new Date("06-19-2025").toDateString(),
  },
  {
    id: 15,
    date: new Date("06-20-2025").toDateString(),
  },
  {
    id: 16,
    date: new Date("06-23-2025").toDateString(),
  },
  {
    id: 17,
    date: new Date("06-24-2025").toDateString(),
  },
  {
    id: 18,
    date: new Date("06-25-2025").toDateString(),
  },
  {
    id: 19,
    date: new Date("06-26-2025").toDateString(),
  },
  {
    id: 20,
    date: new Date("06-27-2025").toDateString(),
  },
  {
    id: 21,
    date: new Date("06-30-2025").toDateString(),
  },
];

function searchData(data) {
  const today = new Date().toDateString();
  const [{ id, date }] = data.filter((dataItem) => dataItem.date === today);
  return id;
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
                <a href={`./img/Schedule/${dataItem.id}.jpg`}>
                  <img
                    className={classes.scheduleSwiperImg}
                    src={`./img/Schedule/${dataItem.id}.png`}
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
