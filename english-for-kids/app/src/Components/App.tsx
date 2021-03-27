/* eslint-disable no-console */
import React, {
  FunctionComponent, useEffect, useState,
} from 'react';
import {
  Route, Switch, BrowserRouter as Router, Redirect, useLocation,
} from 'react-router-dom';

import './index.scss';
import Categories from './Categories/Categories';
import MainPage from './Categories/MainPage';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function usePageViews() {
  interface Map {
    [key: string]: string;
  }
  const routeNamesMap: Map = {
    '/mainPage': 'English For Kids',
    '/AnimalSet1': 'Animal Set 1',
    '/AnimalSet2': 'Animal Set 2',
    '/Body': 'Body',
    '/City': 'City',
    '/Colors': 'Colors',
    '/FoodSet1': 'Food Set 1',
    '/FoodSet2': 'Food Set 2',
    '/Space': 'Space',
  };

  const location = useLocation();

  useEffect(() => {
    const routeName : string = routeNamesMap[location.pathname];
    if (routeName) {
      document.title = routeName;
    }
  }, [location]);
}

const App: FunctionComponent<{state: {cards: any}} | null> = props => {
  const { state } = props;
  const { cards } = state;
  const [isPlayMod, setMod] = useState(false);
  const [game, setGame] = useState(false);

  const switchMod = () => {
    setMod(!isPlayMod);
  };

  const bodyClick = (e: any) => {
    if (e.target.className !== 'navigation__inner' && e.target.id !== 'show') {
      const $nav: HTMLElement | null = document.getElementById('nav');
      if ($nav) {
        $nav.classList.remove('active');
      }
    }
  };

  const Routes = () => {
    usePageViews();
    return (
      <Switch>

        <Route path="/AnimalSet1">
          <Categories state={cards[0]} isPlayMod={isPlayMod} game={game} />
        </Route>

        <Route path="/AnimalSet2">
          <Categories state={cards[1]} isPlayMod={isPlayMod} game={game} />
        </Route>

        <Route path="/Body">
          <Categories state={cards[2]} isPlayMod={isPlayMod} game={game} />
        </Route>

        <Route path="/City">
          <Categories state={cards[3]} isPlayMod={isPlayMod} game={game} />
        </Route>

        <Route path="/Colors">
          <Categories state={cards[4]} isPlayMod={isPlayMod} game={game} />
        </Route>

        <Route path="/FoodSet1">
          <Categories state={cards[5]} isPlayMod={isPlayMod} game={game} />
        </Route>

        <Route path="/FoodSet2">
          <Categories state={cards[6]} isPlayMod={isPlayMod} game={game} />
        </Route>

        <Route path="/Space">
          <Categories state={cards[7]} isPlayMod={isPlayMod} game={game} />
        </Route>

        <Route exact path="/">
          <Redirect to="/mainPage" />
        </Route>

        <Route exact path="/mainPage">
          <MainPage state={state} />
        </Route>
      </Switch>
    );
  };

  return (
    <div onClick={bodyClick} role="button" onKeyPress={() => null} tabIndex={0}>
      <Router>
        <div className="wrapper">
          <Header switchMod={switchMod} isPlayMod={isPlayMod} setGame={setGame} />
          <Routes />

          <Footer />
        </div>
      </Router>

    </div>
  );
};

export default App;
