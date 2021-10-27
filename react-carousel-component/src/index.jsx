import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const imageList = [
  { id: '0', imageLink: '../dist/images/001.png' },
  { id: '1', imageLink: '../dist/images/004.png' },
  { id: '2', imageLink: '../dist/images/007.png' },
  { id: '3', imageLink: '../dist/images/025.png' },
  { id: '4', imageLink: '../dist/images/039.png' }
];

ReactDOM.render(
  <Carousel pokeList = {imageList} />,
  document.querySelector('#root')
);
