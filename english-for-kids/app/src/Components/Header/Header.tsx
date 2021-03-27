import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

export default function Header(
  props: { switchMod: Function; isPlayMod: Boolean; setGame: Function },
) {
  const {
    switchMod, isPlayMod, setGame,
  } = props;

  const toggleClick = () => {
    const $nav: HTMLElement | null = document.getElementById('nav');
    if ($nav) {
      $nav.classList.toggle('active');
    }
  };

  const radioClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const { name } = (e.target as HTMLInputElement);

    switch (name) {
      case 'Train':
        if (isPlayMod) {
          switchMod();
          setGame(false);
        }
        break;

      case 'Play':
        if (!isPlayMod) {
          switchMod();
        }
        break;

      default:
        break;
    }
  };

  return (
    <header className="header">
      <div id="nav" className="navigation">
        <div className="navigation__inner">
          <button className="xButton" onClick={toggleClick} type="button">X</button>
          <NavLink onClick={toggleClick} activeClassName="current" to="/mainPage">
            Main Page
          </NavLink>
          <NavLink onClick={toggleClick} activeClassName="current" to="/AnimalSet1">
            Animal Set 1
          </NavLink>
          <NavLink onClick={toggleClick} activeClassName="current" to="/AnimalSet2">
            Animal Set 2
          </NavLink>
          <NavLink onClick={toggleClick} activeClassName="current" to="/Body">
            Body
          </NavLink>
          <NavLink onClick={toggleClick} activeClassName="current" to="/City">
            City
          </NavLink>
          <NavLink onClick={toggleClick} activeClassName="current" to="/Colors">
            Colors
          </NavLink>
          <NavLink onClick={toggleClick} activeClassName="current" to="/FoodSet1">
            Food Set 1
          </NavLink>
          <NavLink onClick={toggleClick} activeClassName="current" to="/FoodSet2">
            Food Set 2
          </NavLink>
          <NavLink onClick={toggleClick} activeClassName="current" to="/Space">
            Space
          </NavLink>
        </div>
      </div>

      <button type="button" id="show" onClick={toggleClick}>&#9776;</button>

      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-secondary active" htmlFor="option1">
          <input onClick={radioClick} type="radio" name="Train" id="option1" autoComplete="off" checked />

          Train
        </label>
        <label className="btn btn-secondary " htmlFor="option2">
          <input onClick={radioClick} type="radio" name="Play" id="option2" autoComplete="off" />

          Play
        </label>

      </div>
    </header>
  );
}
