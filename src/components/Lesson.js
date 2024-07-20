import React from 'react';
import Typist from 'react-typist';
import 'katex/dist/katex.min.css';
import katex from 'katex';

const Lesson = ({ lesson }) => {
  return (
    <div>
      <h2>Lesson Name: {lesson.title}</h2>
      <p>Grade Level: {lesson.grade}</p>
      <p>Subject: {lesson.subject}</p>
      <h3>Description:</h3>
      <Typist>
        <div dangerouslySetInnerHTML={{ __html: katex.renderToString(lesson.description) }} />
      </Typist>
    </div>
  );
};

export default Lesson;
