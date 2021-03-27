import React from 'react';

const StartRepeat = (props: { startGame: Function; Repeat: Function; isStartGame: Boolean }) => {
  const {
    startGame, Repeat, isStartGame,
  } = props;

  return (
    isStartGame ? (<button onClick={() => Repeat()} type="button" className="repeatBtn startGame" id="start">Repeat</button>)
      : (<button onClick={() => startGame()} type="button" className="startGame" id="start">Start Game</button>)
  );
};

export default StartRepeat;
