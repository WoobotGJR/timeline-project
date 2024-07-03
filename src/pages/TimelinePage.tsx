import { useState } from 'react';
import { STARTER_CATEGORY } from '../constants/constants';
import { renderData } from '../constants/renderData';

import Title from '../components/Title/Title';
import TimelineYears from '../components/TimelineYears/TimelineYears';
import TimelineNavigation from '../components/TimelineNavigation/TimelineNavigation';
import CustomSwiper from '../components/CustomSwiper/CustomSwiper';

import './TimelinePage.scss';

const TimelinePage = () => {
  const [currentCategory, setCurrentCategory] = useState(STARTER_CATEGORY);
  const points = renderData.length;

  const angleStep = 360 / points;
  return (
    <main className="main">
      <Title />
      <TimelineYears currentCategory={currentCategory} />
      <TimelineNavigation
        angleStep={angleStep}
        points={points}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <CustomSwiper currentCategory={currentCategory} />
    </main>
  );
};
export default TimelinePage;
