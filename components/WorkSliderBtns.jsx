import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles, swiper }) => {
  return (
    <div className={containerStyles}>
      <button
        className={btnStyles}
        onClick={() => swiper.slidePrev()}
        aria-label="Previous Slide"
      >
        <FiChevronLeft className={iconsStyles} />
      </button>
      <button
        className={btnStyles}
        onClick={() => swiper.slideNext()}
        aria-label="Next Slide"
      >
        <FiChevronRight className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
