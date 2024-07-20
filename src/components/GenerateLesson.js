import React from 'react';
import { useDispatch } from 'react-redux';
import { generateRandomLesson } from '../utils/generateRandomLesson';

const GenerateLesson = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const lesson = generateRandomLesson();
    dispatch({ type: 'ADD_LESSON', payload: lesson });
  };

  return (
    <button onClick={handleClick}>Generate Lesson</button>
  );
};

export default GenerateLesson;
