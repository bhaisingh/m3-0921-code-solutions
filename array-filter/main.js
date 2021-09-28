const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

console.log('even Number Array: ', numbers.filter(number => (number === 0 || number % 2 === 0)));
console.log('Number over 5 Array: ', numbers.filter(number => number > 5));
console.log('Start With E Array: ', names.filter(name => name.startsWith('E')));
console.log('Have D Array: ', names.filter(name => (name.includes('D') || name.includes('d'))));
