import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import CardsReducer from './reducers/CardsReducer';

const cards: any = [
  [
    {
      word: 'Bird',

      translation: 'Птица',

      image: '../../assets/images/AnimalsSet1/Bird.jpg',

      audioSrc: '../../assets/audios/AnimalsSet1/Bird.mp3',

      Category: 'Animals Set 1',

      link: '/AnimalSet1',
    },

    {
      word: 'Cat',

      translation: 'Кот',

      image: '../../assets/images/AnimalsSet1/Cat.jpg',

      audioSrc: '../../assets/audios/AnimalsSet1/Cat.mp3',
    },

    {
      word: 'Chick',

      translation: 'Птенец',

      image: '../../assets/images/AnimalsSet1/Chick.jpg',

      audioSrc: '../../assets/audios/AnimalsSet1/Chick.mp3',
    },

    {
      word: 'Chicken',

      translation: 'Курица',

      image: '../../assets/images/AnimalsSet1/Chicken.jpg',

      audioSrc: '../../assets/audios/AnimalsSet1/Chicken.mp3',
    },

    {
      word: 'Dog',

      translation: 'Собака',

      image: '../../assets/images/AnimalsSet1/Dog.jpg',

      audioSrc: '../../assets/audios/AnimalsSet1/Dog.mp3',
    },

    {
      word: 'Dolphin',

      translation: 'Дельфин',

      image: '../../assets/images/AnimalsSet1/Dolphin.jpg',

      audioSrc: '../../assets/audios/AnimalsSet1/Dolphin.mp3',
    },

    {
      word: 'Fox',

      translation: 'Лиса',

      image: '../../assets/images/AnimalsSet1/Fox.jpg',

      audioSrc: '../../assets/audios/AnimalsSet1/Fox.mp3',
    },

    {
      word: 'Panda',

      translation: 'Панда',

      image: '../../assets/images/AnimalsSet1/Panda.jpg',

      audioSrc: '../../assets/audios/AnimalsSet1/Panda.mp3',
    },
  ],

  [
    {
      word: 'Fish',

      translation: 'Рыба',

      image: '../../assets/images/AnimalsSet2/Fish.jpg',

      audioSrc: '../../assets/audios/AnimalsSet2/Fish.mp3',

      Category: 'Animals Set 2',

      link: '/AnimalSet2',
    },

    {
      word: 'Frog',

      translation: 'Лягушка',

      image: '../../assets/images/AnimalsSet2/Frog.jpg',

      audioSrc: '../../assets/audios/AnimalsSet2/Frog.mp3',
    },

    {
      word: 'Giraffe',

      translation: 'Жираф',

      image: '../../assets/images/AnimalsSet2/Giraffe.jpg',

      audioSrc: '../../assets/audios/AnimalsSet2/Giraffe.mp3',
    },

    {
      word: 'Horse',

      translation: 'Лошадь',

      image: '../../assets/images/AnimalsSet2/Horse.jpg',

      audioSrc: '../../assets/audios/AnimalsSet2/Horse.mp3',
    },

    {
      word: 'Lion',

      translation: 'Лев',

      image: '../../assets/images/AnimalsSet2/Lion.jpg',

      audioSrc: '../../assets/audios/AnimalsSet2/Lion.mp3',
    },

    {
      word: 'Mouse',

      translation: 'Мышь',

      image: '../../assets/images/AnimalsSet2/Mouse.jpg',

      audioSrc: '../../assets/audios/AnimalsSet2/Mouse.mp3',
    },

    {
      word: 'Pig',

      translation: 'Свинья',

      image: '../../assets/images/AnimalsSet2/Pig.jpg',

      audioSrc: '../../assets/audios/AnimalsSet2/Pig.mp3',
    },

    {
      word: 'Rabbit',

      translation: 'Кролик',

      image: '../../assets/images/AnimalsSet2/Rabbit.jpg',

      audioSrc: '../../assets/audios/AnimalsSet2/Rabbit.mp3',
    },
  ],

  [
    {
      word: 'Eye',

      translation: 'Глаз',

      image: '../../assets/images/Body/Eye.jpg',

      audioSrc: '../../assets/audios/Body/Eye.mp3',

      Category: 'Body',

      link: '/Body',
    },

    {
      word: 'Finger',

      translation: 'Палец',

      image: '../../assets/images/Body/Finger.jpg',

      audioSrc: '../../assets/audios/Body/Finger.mp3',
    },

    {
      word: 'Leg',

      translation: 'Нога',

      image: '../../assets/images/Body/Leg.jpg',

      audioSrc: '../../assets/audios/Body/Leg.mp3',
    },

    {
      word: 'Mouth',

      translation: 'Рот',

      image: '../../assets/images/Body/Mouth.jpg',

      audioSrc: '../../assets/audios/Body/Mouth.mp3',
    },

    {
      word: 'Nose',

      translation: 'Нос',

      image: '../../assets/images/Body/Nose.jpg',

      audioSrc: '../../assets/audios/Body/Nose.mp3',
    },

    {
      word: 'Rib',

      translation: 'Ребро',

      image: '../../assets/images/Body/Rib.jpg',

      audioSrc: '../../assets/audios/Body/Rib.mp3',
    },

    {
      word: 'Teeth',

      translation: 'Зуб',

      image: '../../assets/images/Body/Teeth.jpg',

      audioSrc: '../../assets/audios/Body/Teeth.mp3',
    },

    {
      word: 'Heart',

      translation: 'Сердце',

      image: '../../assets/images/Body/Heart.jpg',

      audioSrc: '../../assets/audios/Body/Heart.mp3',
    },
  ],

  [
    {
      word: 'Car',

      translation: 'Машина',

      image: '../../assets/images/City/Car.jpg',

      audioSrc: '../../assets/audios/City/Car.mp3',

      Category: 'City',

      link: '/City',
    },

    {
      word: 'Crossroads',

      translation: 'Светофоры',

      image: '../../assets/images/City/Crossroads.jpg',

      audioSrc: '../../assets/audios/City/Crossroads.mp3',
    },

    {
      word: 'House',

      translation: 'Дом',

      image: '../../assets/images/City/House.jpg',

      audioSrc: '../../assets/audios/City/House.mp3',
    },

    {
      word: 'Monument',

      translation: 'Памятник',

      image: '../../assets/images/City/Monument.jpg',

      audioSrc: '../../assets/audios/City/Monument.mp3',
    },

    {
      word: 'Park',

      translation: 'Парк',

      image: '../../assets/images/City/Park.jpg',

      audioSrc: '../../assets/audios/City/Park.mp3',
    },

    {
      word: 'Restaurant',

      translation: 'Ресторан',

      image: '../../assets/images/City/Restaurant.jpg',

      audioSrc: '../../assets/audios/City/Restaurant.mp3',
    },

    {
      word: 'School',

      translation: 'Школа',

      image: '../../assets/images/City/School.jpg',

      audioSrc: '../../assets/audios/City/School.mp3',
    },

    {
      word: 'Tram',

      translation: 'Трамвай',

      image: '../../assets/images/City/Tram.jpg',

      audioSrc: '../../assets/audios/City/Tram.mp3',
    },
  ],

  [
    {
      word: 'Black',

      translation: 'Черный',

      image: '../../assets/images/Colors/Black.jpg',

      audioSrc: '../../assets/audios/Colors/Black.mp3',

      Category: 'Colors',

      link: '/Colors',
    },

    {
      word: 'Blue',

      translation: 'Синий',

      image: '../../assets/images/Colors/Blue.jpg',

      audioSrc: '../../assets/audios/Colors/Blue.mp3',
    },

    {
      word: 'Green',

      translation: 'Зеленый',

      image: '../../assets/images/Colors/Green.jpg',

      audioSrc: '../../assets/audios/Colors/Green.mp3',
    },

    {
      word: 'Orange',

      translation: 'Оранжевый',

      image: '../../assets/images/Colors/Orange.jpg',

      audioSrc: '../../assets/audios/Colors/Orange.mp3',
    },

    {
      word: 'Pink',

      translation: 'Розовый',

      image: '../../assets/images/Colors/Pink.jpg',

      audioSrc: '../../assets/audios/Colors/Pink.mp3',
    },

    {
      word: 'Red',

      translation: 'Красный',

      image: '../../assets/images/Colors/Red.jpg',

      audioSrc: '../../assets/audios/Colors/Red.mp3',
    },

    {
      word: 'White',

      translation: 'Белый',

      image: '../../assets/images/Colors/White.jpg',

      audioSrc: '../../assets/audios/Colors/White.mp3',
    },

    {
      word: 'Yellow',

      translation: 'Желтый',

      image: '../../assets/images/Colors/Yellow.jpg',

      audioSrc: '../../assets/audios/Colors/Yellow.mp3',
    },
  ],

  [
    {
      word: 'Apple',

      translation: 'Яблоко',

      image: '../../assets/images/FoodSet1/Apple.jpg',

      audioSrc: '../../assets/audios/FoodSet1/Apple.mp3',

      Category: 'Food Set 1',

      link: '/FoodSet1',
    },

    {
      word: 'Blueberry',

      translation: 'Черника',

      image: '../../assets/images/FoodSet1/Blueberry.jpg',

      audioSrc: '../../assets/audios/FoodSet1/Blueberry.mp3',
    },

    {
      word: 'Burger',

      translation: 'Бургер',

      image: '../../assets/images/FoodSet1/Burger.jpg',

      audioSrc: '../../assets/audios/FoodSet1/Burger.mp3',
    },

    {
      word: 'Pasta',

      translation: 'Макароны',

      image: '../../assets/images/FoodSet1/Pasta.jpg',

      audioSrc: '../../assets/audios/FoodSet1/Pasta.mp3',
    },

    {
      word: 'Pineapple',

      translation: 'Ананас',

      image: '../../assets/images/FoodSet1/Pineapple.jpg',

      audioSrc: '../../assets/audios/FoodSet1/Pineapple.mp3',
    },

    {
      word: 'Salad',

      translation: 'Салат',

      image: '../../assets/images/FoodSet1/Salad.jpg',

      audioSrc: '../../assets/audios/FoodSet1/Salad.mp3',
    },

    {
      word: 'Sausage',

      translation: 'Сосиска',

      image: '../../assets/images/FoodSet1/Sausage.jpg',

      audioSrc: '../../assets/audios/FoodSet1/Sausage.mp3',
    },

    {
      word: 'Steak',

      translation: 'Стейк',

      image: '../../assets/images/FoodSet1/Steak.jpg',

      audioSrc: '../../assets/audios/FoodSet1/Steak.mp3',
    },
  ],

  [
    {
      word: 'Cake',

      translation: 'Торт',

      image: '../../assets/images/FoodSet2/Cake.jpg',

      audioSrc: '../../assets/audios/FoodSet2/Cake.mp3',

      Category: 'Food Set 2',

      link: '/FoodSet2',
    },

    {
      word: 'Egg',

      translation: 'Яйцо',

      image: '../../assets/images/FoodSet2/Egg.jpg',

      audioSrc: '../../assets/audios/FoodSet2/Egg.mp3',
    },

    {
      word: 'Pie',

      translation: 'Пирог',

      image: '../../assets/images/FoodSet2/Pie.jpg',

      audioSrc: '../../assets/audios/FoodSet2/Pie.mp3',
    },

    {
      word: 'Pizza',

      translation: 'Пицца',

      image: '../../assets/images/FoodSet2/Pizza.jpg',

      audioSrc: '../../assets/audios/FoodSet2/Pizza.mp3',
    },

    {
      word: 'Porridge',

      translation: 'Каша',

      image: '../../assets/images/FoodSet2/Porridge.jpg',

      audioSrc: '../../assets/audios/FoodSet2/Porridge.mp3',
    },

    {
      word: 'Potato',

      translation: 'Картошка',

      image: '../../assets/images/FoodSet2/Potato.jpg',

      audioSrc: '../../assets/audios/FoodSet2/Potato.mp3',
    },

    {
      word: 'Sauce',

      translation: 'Соус',

      image: '../../assets/images/FoodSet2/Sauce.jpg',

      audioSrc: '../../assets/audios/FoodSet2/Sauce.mp3',
    },

    {
      word: 'Tomato',

      translation: 'Помидор',

      image: '../../assets/images/FoodSet2/Tomato.jpg',

      audioSrc: '../../assets/audios/FoodSet2/Tomato.mp3',
    },
  ],

  [
    {
      word: 'Asteroid',

      translation: 'Астероид',

      image: '../../assets/images/Space/Asteroid.jpg',

      audioSrc: '../../assets/audios/Space/Asteroid.mp3',

      Category: 'Space',

      link: '/Space',
    },

    {
      word: 'BlackHole',

      translation: 'Черная дыра',

      image: '../../assets/images/Space/BlackHole.jpg',

      audioSrc: '../../assets/audios/Space/BlackHole.mp3',
    },

    {
      word: 'Earth',

      translation: 'Земля',

      image: '../../assets/images/Space/Earth.jpg',

      audioSrc: '../../assets/audios/Space/Earth.mp3',
    },

    {
      word: 'Mars',

      translation: 'Марс',

      image: '../../assets/images/Space/Mars.jpg',

      audioSrc: '../../assets/audios/Space/Mars.mp3',
    },

    {
      word: 'Moon',

      translation: 'Луна',

      image: '../../assets/images/Space/Moon.jpg',

      audioSrc: '../../assets/audios/Space/Moon.mp3',
    },

    {
      word: 'Pulsar',

      translation: 'Пульсар',

      image: '../../assets/images/Space/Pulsar.jpg',

      audioSrc: '../../assets/audios/Space/Pulsar.mp3',
    },

    {
      word: 'Star',

      translation: 'Звезда',

      image: '../../assets/images/Space/Star.jpg',

      audioSrc: '../../assets/audios/Space/Star.mp3',
    },

    {
      word: 'Sun',

      translation: 'Солнце',

      image: '../../assets/images/Space/Sun.jpg',

      audioSrc: '../../assets/audios/Space/Sun.mp3',
    },
  ],
];

const reducers = combineReducers({
  cards: CardsReducer,
});

// const store = createStore(
//   reducers,
//   { cards },
//   composeWithDevTools(applyMiddleware(thunk)),
// );

const devTools = process.env.NODE_ENV === 'production'
  ? applyMiddleware(thunk)
  : composeWithDevTools(applyMiddleware(thunk));

const store = createStore(reducers, { cards }, devTools);

export default store;
