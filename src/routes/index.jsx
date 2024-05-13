import {Routes, Route} from 'react-router-dom';
import {Home, NoFound} from '../views/index';
import {FirstLessonWrapper} from '../components/FirstLesson/index';
import {SecondLessonWrapper} from '../components/SecondLesson';
import {ThirthLessonWrapper} from '../components/ThithLesson';
import {PairWordsWrapper} from '../components/PairWords';

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson/first" element={<FirstLessonWrapper />} />
        <Route path="/lesson/second" element={<SecondLessonWrapper />} />
        <Route path="/lesson/thirth" element={<ThirthLessonWrapper />} />
        <Route path="/pairs" element={<PairWordsWrapper />} />
        <Route path="*" element={<NoFound />} />
        {/* {isAuth && <Route path="/home" element={<Home />} />} */}
      </Routes>
    </div>
  );
};
