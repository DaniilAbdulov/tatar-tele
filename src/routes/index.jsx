import {Routes, Route} from 'react-router-dom';
import {Home, NoFound} from '../views/index';
//import { useEffect } from "react";
import {FirstLessonWrapper} from '../components/FirstLesson/index';
import {SecondLessonWrapper} from '../components/SecondLesson';
import {ThirthLessonWrapper} from '../components/ThithLesson';
import { PairWordsWrapper } from '../components/PairWords';

export const Router = () => {
  //const isAuth = true;

  // useEffect(() => {
  //     if (isAuth) {
  //         navigate("/home");
  //     } else {
  //         navigate("/");
  //     }
  // }, [navigate, isAuth]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/first" element={<FirstLessonWrapper />} />
        <Route path="/second" element={<SecondLessonWrapper />} />
        <Route path="/thirth" element={<ThirthLessonWrapper />} />
        <Route path="/pairs" element={<PairWordsWrapper />} />
        <Route path="*" element={<NoFound />} />
        {/* {isAuth && <Route path="/home" element={<Home />} />} */}
      </Routes>
    </div>
  );
};
