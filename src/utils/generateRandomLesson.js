import React from 'react';
import { useDispatch } from 'react-redux';
import { addLesson, addSearchHistory } from '../redux/actions';
import { getRandomLesson } from '../utils/randomContent';

const GenerateLesson = () => {
  const dispatch = useDispatch();

  const generateLesson = () => {
    const lesson = getRandomLesson();
    dispatch(addLesson(lesson));
    dispatch(addSearchHistory(lesson.name));
  };

  return (
    <button onClick={generateLesson}>Generate Lesson</button>
  );
};

export default GenerateLesson;
