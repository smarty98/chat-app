import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSearchHistory, addLesson } from '../redux/actions';
import { getRandomLesson } from '../utils/randomContent';

const Sidebar = () => {
  const [input, setInput] = useState('');
  const searchHistory = useSelector((state) => state.searchHistory);
  const dispatch = useDispatch();



  const generateLesson = () => {
    const lesson = getRandomLesson();
    dispatch(addLesson(lesson));
    dispatch(addSearchHistory(lesson.name));
  };

  return (
    <div className="sidebar">
      <div className="search-history">
        {searchHistory.map((term, index) => (
          <div key={index} className="search-item">{term}</div>
        ))}
      </div>
      <div className="search-section">
        <input
          type="text"
          placeholder="Give a prompt to generate lesson..."
          value={input}
          id='ipt'
          onChange={(e) => setInput(e.target.value)}
        />
        
        <button id='btn' onClick={generateLesson}>Generate Lesson</button>
      </div>
    </div>
  );
};

export default Sidebar;
