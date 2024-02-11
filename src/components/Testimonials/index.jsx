import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

function Testimonials() {
  const [showNavigation, setShowNavigation] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setShowNavigation(window.innerWidth > 768);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const slides = [
    {
      text: "loremp ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates provident, error eius consequuntur aspernatur, ea voluptatum fugiat praesentium eveniet atque saepe dolorem, numquam quisquam at libero soluta nihil neque beatae!",
      image: "https://picsum.photos/id/1018/1000/600/",
      worklocation: "Work Location 1",
    },
    {
      text: "loremp ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates provident, error eius consequuntur aspernatur, ea voluptatum fugiat praesentium eveniet atque saepe dolorem, numquam quisquam at libero soluta nihil neque beatae!",
      image: "https://picsum.photos/id/1015/1000/600/",
      worklocation: "Work Location 2",
    },
    {
      text: "loremp ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates provident, error eius consequuntur aspernatur, ea voluptatum fugiat praesentium eveniet atque saepe dolorem, numquam quisquam at libero soluta nihil neque beatae!",
      image: "https://picsum.photos/id/1019/1000/600/",
      worklocation: "Work Location 3",
    },
    {
      text: "loremp ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates provident, error eius consequuntur aspernatur, ea voluptatum fugiat praesentium eveniet atque saepe dolorem, numquam quisquam at libero soluta nihil neque beatae!",
      image: "https://picsum.photos/id/1018/1000/600/",
      worklocation: "Work Location 4",
    },
    {
      text: "loremp ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates provident, error eius consequuntur aspernatur, ea voluptatum fugiat praesentium eveniet atque saepe dolorem, numquam quisquam at libero soluta nihil neque beatae!",
      image: "https://picsum.photos/id/1015/1000/600/",
      worklocation: "Work Location 5",
    },
    {
      text: "loremp ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates provident, error eius consequuntur aspernatur, ea voluptatum fugiat praesentium eveniet atque saepe dolorem, numquam quisquam at libero soluta nihil neque beatae!",
      image: "https://picsum.photos/id/1019/1000/600/",
      worklocation: "Work Location 6",
    },
    {
      text: "loremp ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates provident, error eius consequuntur aspernatur, ea voluptatum fugiat praesentium eveniet atque saepe dolorem, numquam quisquam at libero soluta nihil neque beatae!",
      image: "https://picsum.photos/id/1018/1000/600/",
      worklocation: "Work Location 7",
    },
    {
      text: "loremp ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates provident, error eius consequuntur aspernatur, ea voluptatum fugiat praesentium eveniet atque saepe dolorem, numquam quisquam at libero soluta nihil neque beatae!",
      image: "https://picsum.photos/id/1015/1000/600/",
      worklocation: "Work Location 8",
    },
    {
      text: "loremp ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates provident, error eius consequuntur aspernatur, ea voluptatum fugiat praesentium eveniet atque saepe dolorem, numquam quisquam at libero soluta nihil neque beatae!",
      image: "https://picsum.photos/id/1019/1000/600/",
      worklocation: "Work Location 9",
    },
  ];

  return (
    <div className="h-[100%] my-[5vh]">
      <div>
        <h2 className="text-4xl sm:text-6xl font-bold">Testimonials</h2>
        <p className="p-5 px-[10%] sm:px-[15%] font-light text-2xl">
          Hear about us from our clients
        </p>
      </div>
      <div className="p-5 h-full w-full">
        <Swiper
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#000",
          }}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={showNavigation}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {slides.map((slide) => (
            <SwiperSlide>
              <svg
                class="h-16 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <h2 className="text-sm sm:text-2xl sm:font-bold font-semibold sm:mx-[100px]">
                {slide.text}
              </h2>
              <div className="flex gap-4 justify-center items-center py-8 pb-16">
                <img
                  src={slide.image}
                  alt=""
                  className="h-[50px] w-[50px] object-cover rounded-full"
                />

                <p className="text-lg">{slide.worklocation}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
