import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import './App.scss';

import 'swiper/scss';
import 'swiper/scss/navigation';
import ArrowButton from './components/ui/ArrowButton/ArrowButton';

const App = () => {
  const points = 6; // количество точек
  const angleStep = 360 / points; // угол между точками
  const events = [
    {
      year: 2015,
      description:
        '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
    },
    {
      year: 2016,
      description:
        'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
    },
    {
      year: 2017,
      description:
        'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
    },
    {
      year: 2015,
      description:
        '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
    },
    {
      year: 2016,
      description:
        'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
    },
    {
      year: 2017,
      description:
        'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
    },
    {
      year: 2015,
      description:
        '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
    },
    {
      year: 2016,
      description:
        'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
    },
    {
      year: 2017,
      description:
        'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
    },
  ];

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
          <button className="swiper-navbar__button">
            <ArrowButton direction="left" />
          </button>
          <button className="swiper-navbar__button">
            <ArrowButton direction="right" />
          </button>
        </div>
      </div>

      <div className="swiper-container">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={3}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="event-card">
                <h3 className="event-year">{event.year}</h3>
                <p className="event-description">{event.description}</p>
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
