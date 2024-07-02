import { SwiperSlide } from 'swiper/react';
import './App.scss';

const App = () => {
  const points = 6; // количество точек
  const angleStep = 360 / points; // угол между точками
  return (
    <main className="main">
      <div className="timeline">
        <h1 className="timeline__header">Исторические даты</h1>
      </div>

      <div className="timeline__dates">
        <span className="start-year">2015</span>
        <span className="end-year">2022</span>
      </div>

      <div className="timeline__navigation">
        <div className="main-circle">
          {Array.from({ length: points }).map((_, index) => {
            return (
              <div
                key={index}
                className="main-circle__circle-item"
                style={
                  {
                    '--index': index,
                    '--correctingDeg': 2 * angleStep * index + 'deg',
                    '--count': points,
                  } as React.CSSProperties
                }
              >
                <div className="main-circle__text-container">
                  <h2 className="main-circle__text">
                    {index + 1}
                    <span className="main-circle__span-text"></span>
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="swiper-navbar">
        <p className="swiper-navbar__text">06/06</p>
        <div className="swiper-navbar__buttons">
          <button className="swiper-navbar__button forward-button"></button>
          <button className="swiper-navbar__button backward-button"></button>
        </div>
      </div>

      <div className="swiper">
        <div className="swiper-wrapper">
          <SwiperSlide>
            <div className="swiper-slide">Slide 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">Slide 2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">Slide 3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">Slide 4</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">Slide 5</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">Slide 6</div>
          </SwiperSlide>
        </div>
      </div>
    </main>
  );
};
export default App;
