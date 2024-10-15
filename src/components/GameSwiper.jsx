/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import "./gameSwiper.css";

// import required modules
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import GameSlide from "./GameSlide";

const GameSwiper = ({ games }) => {
  const [active, setActive] = useState(false);

  const handleToggleVideo = () => {
    setActive(!active);
  };

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      navigation={true}
      loop={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 35,
        stretch: 200,
        depth: 250,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectCoverflow, Navigation, Autoplay]}
      className="mySwiper"
    >
      {games.map((game) => {
        return (
          <SwiperSlide key={game._id}>
            <GameSlide
              key={game._id}
              game={game}
              active={active}
              toggleVideo={handleToggleVideo}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default GameSwiper;
