import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import ArrowButton from './components/ui/ArrowButton/ArrowButton';

import 'swiper/scss';
import 'swiper/scss/navigation';

import './App.scss';
import { renderData } from './constants/renderData';
import { MAX_SLIDES, STARTER_CATEGORY } from './constants/constants';
import gsap from 'gsap';

const App = () => {
  const startYearRef = useRef<HTMLSpanElement>(null);
  const endYearRef = useRef<HTMLSpanElement>(null);

  const [switchAngle, setSwitchAngle] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(STARTER_CATEGORY);
  const [isVisible, setIsVisible] = useState(false);

  let lowestYear = renderData[currentCategory].details[0].year;
  let highestYear = renderData[currentCategory].details[5].year;

  const [prevStartYear, setPrevStartYear] = useState(lowestYear);
  const [prevEndYear, setPrevEndYear] = useState(highestYear);

  const points = renderData.length;
  const angleStep = 360 / points;

  useEffect(() => {
    animateYearChange(
      startYearRef.current ?? new HTMLSpanElement(),
      Number(prevStartYear),
      Number(lowestYear)
    );
    setPrevStartYear(lowestYear);

    animateYearChange(
      endYearRef.current ?? new HTMLSpanElement(),
      Number(prevEndYear),
      Number(highestYear)
    );
    setPrevEndYear(highestYear);
  }, [currentCategory]);

  // Delay for animation of swiper cards appearing
  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, [currentCategory]);

  const rotateChosenCategory = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLElement;
    const chosenCategory = parseInt(target.innerText) - 1;

    setCurrentCategory((prev) => {
      setSwitchAngle(calculateAngle(prev, chosenCategory) + switchAngle);
      return chosenCategory;
    });
  };

  const calculateAngle = (currentIndex: number, chosenIndex: number) => {
    if (currentIndex < chosenIndex) {
      return -Math.abs(currentIndex - chosenIndex) * angleStep;
    } else if (currentIndex > chosenIndex) {
      return Math.abs(currentIndex - chosenIndex) * angleStep;
    }

    return STARTER_CATEGORY;
  };

  const rotatePrevious = () => {
    setCurrentCategory((prevCategory) =>
      prevCategory === 0 ? renderData.length - 1 : prevCategory - 1
    );
    setSwitchAngle(switchAngle + angleStep);
  };

  const rotateNext = () => {
    setCurrentCategory((currentCategory + 1) % renderData.length);
    setSwitchAngle(switchAngle - angleStep);
  };

  const animateYearChange = (
    element: HTMLSpanElement,
    startValue: number,
    endValue: number,
    duration = 1
  ) => {
    const yearObj = { value: startValue };

    gsap.to(yearObj, {
      duration: duration,
      value: endValue,
      roundProps: 'value',
      onUpdate: () => {
        element.textContent = String(yearObj.value);
      },
      ease: 'none',
    });
  };

  return (
    <main className="main">
      <div className="timeline">
        <h1 className="timeline__header">Исторические даты</h1>
      </div>

      <div className="timeline__dates">
        <span ref={startYearRef} className="start-year">
          {lowestYear}
        </span>
        <span ref={endYearRef} className="end-year">
          {highestYear}
        </span>
      </div>

      <div className="timeline__navigation">
        <div className="main-circle">
          {renderData.map((item, index) => {
            return (
              <div
                key={index}
                className={`main-circle__circle-item ${
                  currentCategory === index
                    ? 'main-circle__circle-item_active'
                    : ''
                }`}
                style={
                  {
                    '--index': index,
                    '--correctingDeg': 2 * angleStep * index + 'deg',
                    '--count': points,
                    '--switchAngle': switchAngle + 'deg',
                  } as React.CSSProperties
                }
                onClick={(event) => rotateChosenCategory(event)}
              >
                <div className="main-circle__text-container">
                  <h2 className="main-circle__text">
                    {index + 1}
                    <span className="main-circle__span-text">
                      {item.category}
                    </span>
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="swiper-navbar">
        <p className="swiper-navbar__text">{`${currentCategory + 1} / ${
          renderData.length
        }`}</p>
        <div className="swiper-navbar__buttons">
          <button
            className="swiper-navbar__button"
            onClick={() => rotatePrevious()}
          >
            <ArrowButton direction="left" />
          </button>
          <button
            className="swiper-navbar__button"
            onClick={() => rotateNext()}
          >
            <ArrowButton direction="right" />
          </button>
        </div>
      </div>

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
    </main>
  );
};
export default App;
