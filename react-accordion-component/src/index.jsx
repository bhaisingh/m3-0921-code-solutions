import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const contentList = [
  { id: '1', name: 'Hypertext Markup Language', description: 'Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.' },
  { id: '2', name: 'Cascading Style Sheets', description: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.' },
  { id: '3', name: 'Javascript', description: 'An object-oriented computer programming language commonly used to create interactive effects within web browsers.' }
];

ReactDOM.render(
    <Accordion content={contentList} />,
    document.querySelector('#root')
);
