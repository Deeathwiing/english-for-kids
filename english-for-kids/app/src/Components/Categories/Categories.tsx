/* eslint-disable no-console */

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { CardType, CategoriesPropsType } from '../../customTypes/types';
import StartRepeat from '../Buttons/StartRepeat';
import Card from '../Card/Card';

import AnswerElement from './AnswerElement';
import WinOrLose from './WinOrLose';

const Categories = (props: CategoriesPropsType) => {
  const {
    state, isPlayMod,
  } = props;

  const cards = [...state];

  const [shuffledCards, setShuffledCards] = useState([]);
  const [tempWord, setTempWord] = useState('');
  const [tempAudio, setAudio] = useState('');
  const [isStartGame, toggleIsStart] = useState(false);
  const [answerArray, updateAnswerArray] = useState([]);
  const [tempAnswerArray, updateTempAnswerArray] = useState([]);
  const [disabledCards, updateDisabledCards] = useState([]);

  const [isWin, setWin] = useState(false);
  const [isLose, setLose] = useState(false);

  const audio = new Audio();
  const history = useHistory();

  const updateArray = (result: Boolean) => {
    const tempArr: any = [...answerArray];
    tempArr.push(result);
    updateAnswerArray(tempArr);
  };

  const playWordAudio = (src: string) => {
    audio.src = src;

    audio.load();
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.then(() => {}).catch(() => {});
    }
  };

  const startGame = () => {
    const tempCards = [...cards];
    const tempShuffledCards: any = tempCards.sort(() => Math.random() - 0.5);
    setShuffledCards(tempShuffledCards);

    const newCard: any = tempShuffledCards.pop();
    const newTempWord = newCard.word;
    const newTempAudio = newCard.audioSrc;

    playWordAudio(newTempAudio);
    setShuffledCards(tempShuffledCards);
    setTempWord(newTempWord);
    setAudio(newTempAudio);
    updateAnswerArray([]);
    setWin(false);
    toggleIsStart(true);
  };

  const Repeat = () => {
    playWordAudio(tempAudio);
  };

  const redirectToMainPage = () => {
    history.push('/MainPage');
  };

  const checkWin = () => answerArray.every(element => element);

  const disabledCardsChanger = (word: String) => {
    const tempDisabledCards: any = [...disabledCards];
    tempDisabledCards.push(word);
    updateDisabledCards(tempDisabledCards);
  };

  const playClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const target = (e.target as HTMLInputElement);
    const clickWord = target.dataset.word;
    const tempShuffledCards = [...shuffledCards];

    if (clickWord === tempWord) {
      disabledCardsChanger(clickWord);
      if (tempShuffledCards.length) {
        target.style.opacity = '0.3';
        target.style.cursor = 'auto';
        updateArray(true);
        playWordAudio('../../assets/audios/successful.mp3');
        const newCard: any = tempShuffledCards.pop();
        const newTempWord = newCard.word;
        const newTempAudio = newCard.audioSrc;
        setShuffledCards(tempShuffledCards);
        setTempWord(newTempWord);
        setAudio(newTempAudio);
        setTimeout(() => {
          playWordAudio(newTempAudio);
        }, 1000);
      } else {
        const checkWinOrLose = checkWin();
        setWin(checkWinOrLose);
        setLose(!checkWinOrLose);

        if (checkWinOrLose) {
          playWordAudio('../../assets/audios/win.mp3');
          updateTempAnswerArray(answerArray);
          updateAnswerArray([]);
        } else {
          playWordAudio('../../assets/audios/lose.mp3');
          updateTempAnswerArray(answerArray);
          updateAnswerArray([]);
        }

        toggleIsStart(false);

        setTimeout(() => {
          redirectToMainPage();
        }, 2000);
      }
    } else if (tempShuffledCards.length) {
      updateArray(false);
      playWordAudio('../../assets/audios/error.mp3');
    }
  };

  const checkDisabled = (word:String): Boolean => {
    const tempArr: any = [...disabledCards];

    const result: Boolean = tempArr.includes(word);
    console.log(result);
    return result;
  };

  const cardsElements = cards.map((element: CardType) => <Card key={element.word} isDisabled={checkDisabled(element.word) || false} state={{ element }} isPlayMod={isPlayMod} playClick={playClick} />);

  const answerElements = answerArray.map((element: Boolean) => <AnswerElement isRight={element} />);

  return (
    <>
      <div className="cards">
        {(!isWin && !isLose) && cardsElements}
        {isPlayMod && <StartRepeat startGame={startGame} Repeat={Repeat} isStartGame={isStartGame} />}
      </div>
      {(isWin || isLose) && <WinOrLose isWin={isWin} answerArray={tempAnswerArray} />}
      <div className="answers">
        {answerElements}
      </div>
    </>
  );
};

export default Categories;
