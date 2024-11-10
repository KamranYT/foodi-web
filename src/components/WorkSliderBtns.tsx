"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

// Define the prop types
type WorkSliderBtnsProps = {
  containerStyles: string;
  btnStyles: string;
  iconsStyle: string;
};

const WorkSliderBtns: React.FC<WorkSliderBtnsProps> = ({ containerStyles, btnStyles, iconsStyle }) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      {/* Previous slide button */}
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyle} />
      </button>
      {/* Next slide button */}
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyle} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
