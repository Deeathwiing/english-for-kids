/* eslint-disable no-console */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import Flip from 'react-reveal/Flip';
import withReveal from 'react-reveal/withReveal';
import { Link } from 'react-router-dom';

import './index.scss';

const Card = (
  props: {
    state: {
      element:
      { word: string;
        translation: string;
        image: string;
        audioSrc: string;
        Category?: string;
        link?: string;
      };
      mainPage?: Boolean;};

    isPlayMod?: Boolean ;

    playClick?: Function;
    isDisabled?: Boolean;
  },
) => {
  const [isShow, setShow] = useState(false);

  const {
    state, isPlayMod, playClick, isDisabled,
  } = props;
  const { mainPage } = state;

  const rotateClick = () => {
    setShow(!isShow);
  };

  const mouseLeave = () => {
    setShow(false);
  };

  const trainClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const { className } = (e.target as HTMLInputElement);

    if (!(className === 'flip')) {
      const { element } = state;
      const { audioSrc } = element;

      const audio = new Audio(audioSrc);

      audio.play();
    }
  };

  if (mainPage) {
    return (
      <Flip left>

        <div className="card main__card">
          <Link to={state.element.link || ''}>

            <img
              src={state.element.image}
              className="card-img-top"
              alt={state.element.word}
            />
            <span>{state.element.Category}</span>

          </Link>
        </div>
      </Flip>
    );
  }
  let OldComponent;
  if (!isPlayMod) {
    OldComponent = () => (

      <div onMouseLeave={mouseLeave} onClick={trainClick} className="card" role="button" onKeyPress={() => null} tabIndex={0}>

        <img
          src={state.element.image}
          className="card-img-top"
          alt={state.element.word}
        />
        <span>
          {isShow ? state.element.translation : state.element.word }

          <div role="button" onKeyPress={() => {}} tabIndex={0} onClick={() => rotateClick()} className="flip">

            <img className="flip" src="../../../assets/images/Flip.jpg" alt="Flip" />

          </div>

        </span>
      </div>

    );
  } else {
    console.log(isDisabled);

    OldComponent = () => (

      <div className="card" onClick={e => ((playClick && !isDisabled) ? playClick(e) : null)} role="button" onKeyPress={() => null} tabIndex={0}>

        <img
          src={state.element.image}
          className={`card-img-top isPlay ${isDisabled ? 'disabled' : ''}`}
          alt={state.element.word}
          data-word={state.element.word}
        />
      </div>

    );
  }

  const NewComponent = withReveal(OldComponent, <Flip className="card" left when={isShow} />);
  return <NewComponent />;
};

export default Card;
