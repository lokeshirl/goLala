/* Hero Icons imports */
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";

/* Keen slider imports */
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

/* Components imports */
import Banner from "./Banner.jsx";
import { useState } from "react";

const BannerList = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    mode: "free",
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      "(max-width: 480px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 480px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
  });
  return (
    <section className="container-max py-4">
      {/* Banner-List-Title */}
      <div className="banner-title flex items-center justify-between mb-4">
        <h1 className="font-bold text-2xl text-zinc-700">
          Best offers for you
        </h1>
        {/* <div className="flex gap-2 item-center">
          <button className="bg-primary p-2 rounded-full disabled:text-gray-300">
            <ArrowLongLeftIcon className="w-4 h-4 text-white" />
          </button>
          <button className="bg-primary p-2 rounded-full disabled:text-gray-300">
            <ArrowLongRightIcon className="w-4 h-4 text-white" />
          </button>
        </div> */}
        {instanceRef.current && (
          <div className="flex gap-2 items-center">
            <button
              disabled={currentSlide === 0}
              onClick={() => instanceRef.current?.prev()}
              className="bg-gray-100 p-2 rounded-full disabled:text-gray-300"
            >
              <ArrowLongLeftIcon className="w-4 h-4" />{" "}
            </button>
            <button
              disabled={
                currentSlide ===
                instanceRef?.current?.track?.details?.slides?.length - 1
              }
              onClick={() => instanceRef.current?.next()}
              className="bg-gray-100 p-2 rounded-full disabled:text-gray-300"
            >
              <ArrowLongRightIcon className="w-4 h-4" />{" "}
            </button>
          </div>
        )}
      </div>
      {/* Banner-card */}
      <div ref={sliderRef} className="banner keen-slider">
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
      </div>
    </section>
  );
};

export default BannerList;
