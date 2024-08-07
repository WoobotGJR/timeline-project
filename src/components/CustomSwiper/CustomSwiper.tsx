import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import ArrowButton from '../ui/ArrowButton/ArrowButton';
import { renderData } from '../../constants/renderData';
import { MAX_SLIDES } from '../../constants/constants';
import { useLayoutEffect, useState } from 'react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

interface CustomSwiperProps {
  currentCategory: number;
}

const CustomSwiper: React.FC<CustomSwiperProps> = ({ currentCategory }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Delay for animation of swiper cards appearing
  useLayoutEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, [currentCategory]);

  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          disabledClass: 'swiper-button-disabled',
        }}
        spaceBetween={10}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        scrollbar={{ draggable: true }}
      >
        {renderData[currentCategory].details
          .slice(0, MAX_SLIDES)
          .map((details, index) => (
            <SwiperSlide
              key={index}
              className={isVisible ? 'visible' : 'hidden'}
            >
              <div className="event-card">
                <h3 className="event-year">{details.year}</h3>
                <p className="event-description">{details.info}</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="swiper-pagination"></div>

      <button className="swiper-button-prev">
        <ArrowButton direction="left" />
      </button>
      <button className="swiper-button-next">
        <ArrowButton direction="right" />
      </button>
    </div>
  );
};
export default CustomSwiper;
