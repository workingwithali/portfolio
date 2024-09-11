import React from "react";
import { useSwiper } from "swiper/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <FiChevronLeft className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <FiChevronRight className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;