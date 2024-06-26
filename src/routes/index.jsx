import {Routes, Route} from 'react-router-dom';
import {Home, NoFound} from '../views/index';
import {FirstLessonWrapper} from '../components/FirstLesson/index';
import {SecondLessonWrapper} from '../components/SecondLesson';
import {ThirthLessonWrapper} from '../components/ThithLesson';
import {PairWordsWrapper} from '../components/PairWords';
import {FourthLessonWrapper} from '../components/FourthLesson';

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/first" element={<FirstLessonWrapper />} />
        <Route path="/second" element={<SecondLessonWrapper />} />
        <Route path="/thirth" element={<ThirthLessonWrapper />} />
        <Route path="/fourth" element={<FourthLessonWrapper />} />
        <Route path="/pairs" element={<PairWordsWrapper />} />
        <Route path="*" element={<NoFound />} />
        {/* {isAuth && <Route path="/home" element={<Home />} />} */}
      </Routes>
    </div>
  );
};
