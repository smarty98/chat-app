import React from 'react';
import { useSelector } from 'react-redux';
import Typist from 'react-typist';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const ContentDisplay = () => {
  const data = useSelector(state => state.data);

  return (
    <div>
      {data.map((item, index) => (
        <Typist key={index}>
          <BlockMath math={item} />
        </Typist>
      ))}
    </div>
  );
};

export default ContentDisplay;
