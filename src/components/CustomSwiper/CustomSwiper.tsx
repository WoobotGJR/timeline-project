import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import ArrowButton from '../ui/ArrowButton/ArrowButton';
import { renderData } from '../../constants/renderData';
import { MAX_SLIDES } from '../../constants/constants';
import { useEffect, useState } from 'react';

import 'swiper/scss';
import 'swiper/scss/navigation';

interface CustomSwiperProps {
  currentCategory: number;
}

const CustomSwiper: React.FC<CustomSwiperProps> = ({ currentCategory }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Delay for animation of swiper cards appearing
  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, [currentCategory]);

  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          disabledClass: 'swiper-button-disabled',
        }}
        pagination={{ clickable: true }}
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
