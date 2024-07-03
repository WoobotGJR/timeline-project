import { useEffect, useRef, useState } from 'react';
import { renderData } from '../../constants/renderData';
import gsap from 'gsap';

interface TimelineYearsProps {
  currentCategory: number;
}

const TimelineYears: React.FC<TimelineYearsProps> = ({ currentCategory }) => {
  const startYearRef = useRef<HTMLSpanElement>(null);
  const endYearRef = useRef<HTMLSpanElement>(null);

  let lowestYear = renderData[currentCategory].details[0].year;
  let highestYear = renderData[currentCategory].details[5].year;

  const [prevStartYear, setPrevStartYear] = useState(lowestYear);
  const [prevEndYear, setPrevEndYear] = useState(highestYear);

  // To avoid twitching immediate after re-rendering
  useEffect(() => {
    if (startYearRef.current && endYearRef.current) {
      startYearRef.current.textContent = lowestYear;
      endYearRef.current.textContent = highestYear;
    }
  }, []);

  // Animation of year changing upon category change
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

  // Animation of year changing with gsap
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
    <div className="timeline__dates">
      <span ref={startYearRef} className="start-year">
        {lowestYear}
      </span>
      <span ref={endYearRef} className="end-year">
        {highestYear}
      </span>
    </div>
  );
};
export default TimelineYears;
