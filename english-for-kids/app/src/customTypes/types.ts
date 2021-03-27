export type CategoriesPropsType = {
  state: Array<CardType>;
  isPlayMod: Boolean;
  game: Boolean;
};

export type CardType = {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
  Category: string;
  link: string;
  playClick?: Function;
  isDisabled? : Boolean;
};
