import React from 'react';
import { useSelector } from 'react-redux';
import Typewriter from './Typewriter';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

const MainContent = () => {
  const lessons = useSelector(state => state.lessons);

  return (
    <div className="main-content">
      {lessons.map((lesson, index) => (
        <div key={index}>
          <h1>Lesson Name: {lesson.name}</h1>
          <h2>Grade Level: {lesson.grade}</h2>
          <h3>Subject: {lesson.subject}</h3>
          <Typewriter text={lesson.description} />
          <div>
            <InlineMath>{lesson.description}</InlineMath>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainContent;
