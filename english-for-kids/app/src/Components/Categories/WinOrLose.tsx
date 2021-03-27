/* eslint-disable no-console */
import React from 'react';

const WinOrLose = (props: {isWin: Boolean; answerArray: Array<Boolean>}) => {
  const { isWin, answerArray } = props;

  const wrongAnswers = answerArray.filter(element => !element);

  return (
    isWin ? (
      <div className="lose__window">
        <img className="winOrLoseImg" src="../../../assets/images/Win.jpg" alt="Win" />
      </div>
    )
      : (
        <div className="lose__window">
          <img className="winOrLoseImg" src="../../../assets/images/Lose.jpg" alt="Lose" />
          <span>
            Wrong Answers:
            {wrongAnswers.length}
          </span>
        </div>
      )
  );
};

export default WinOrLose;
