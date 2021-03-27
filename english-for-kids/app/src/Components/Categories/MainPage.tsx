import React from 'react';

import Card from '../Card/Card';

const MainPage = (props: { state: {cards: any} }) => {
  const { state } = props;
  let { cards } = state;
  const tempArr: any[] = [];
  cards.forEach((element: Array<Object>) => {
    tempArr.push(element[0]);
  });

  cards = tempArr.map((element: { word: string; translation: string; image: string; audioSrc: string; Category: string; link: string }) => <Card key={element.word} state={{ element, mainPage: true }} />);

  return (
    <div className="cards">
      {cards}
    </div>
  );
};
export default MainPage;
