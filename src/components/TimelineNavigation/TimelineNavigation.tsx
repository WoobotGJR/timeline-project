import { useState } from 'react';
import { STARTER_CATEGORY } from '../../constants/constants';
import { renderData } from '../../constants/renderData';
import ArrowButton from '../ui/ArrowButton/ArrowButton';

interface TimelineNavigationProps {
  currentCategory: number;
  angleStep: number;
  points: number;
  setCurrentCategory: React.Dispatch<React.SetStateAction<number>>;
}

const TimelineNavigation: React.FC<TimelineNavigationProps> = ({
  angleStep,
  points,
  setCurrentCategory,
  currentCategory,
}) => {
  const [switchAngle, setSwitchAngle] = useState(0);

  // Rotation of circles upon category change
  const rotateChosenCategory = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLElement;
    const chosenCategory = parseInt(target.innerText) - 1;

    setCurrentCategory((prev) => {
      setSwitchAngle(calculateAngle(prev, chosenCategory) + switchAngle);
      return chosenCategory;
    });
  };

  // Calculating angle to rotate
  const calculateAngle = (currentIndex: number, chosenIndex: number) => {
    if (currentIndex < chosenIndex) {
      return -Math.abs(currentIndex - chosenIndex) * angleStep;
    } else if (currentIndex > chosenIndex) {
      return Math.abs(currentIndex - chosenIndex) * angleStep;
    }

    return STARTER_CATEGORY;
  };

  // Rotation of circles upon prev button click
  const rotatePrevious = () => {
    setCurrentCategory((prevCategory) =>
      prevCategory === 0 ? renderData.length - 1 : prevCategory - 1
    );
    setSwitchAngle(switchAngle + angleStep);
  };

  // Rotation of circles upon next button click
  const rotateNext = () => {
    setCurrentCategory((currentCategory + 1) % renderData.length);
    setSwitchAngle(switchAngle - angleStep);
  };
  return (
    <div>
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

      <div className="circles-navbar">
        <p className="circles-navbar__text">{`${String(
          currentCategory + 1
        ).padStart(2, '0')} / ${renderData.length
          .toString()
          .padStart(2, '0')}`}</p>
        <div className="circles-navbar__buttons">
          <button
            className="circles-navbar__button"
            onClick={() => rotatePrevious()}
          >
            <ArrowButton direction="left" />
          </button>
          <button
            className="circles-navbar__button"
            onClick={() => rotateNext()}
          >
            <ArrowButton direction="right" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default TimelineNavigation;
