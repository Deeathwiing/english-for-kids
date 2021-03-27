import React from 'react';
import './index.scss';

const AnswerElement = (props: {isRight: Boolean}) => {
  const { isRight } = props;
  return (
    <div className={`box ${isRight ? 'right' : 'wrong'}`} />
  );
};

export default AnswerElement;
