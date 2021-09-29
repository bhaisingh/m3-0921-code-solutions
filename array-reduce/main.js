const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

// Sum all numbers
const sumAllNumbers = (total, num) => {
  return total + num;
};
console.log('Sum all numbers: ', numbers.reduce(sumAllNumbers, 0));

// Multiply all numbers
const productAllNumbers = (total, num) => {
  return total * num;
};
console.log('Multiply all numbers: ', numbers.reduce(productAllNumbers, 1));

// balance account
const balance = (total, obj) => {
  if (obj.type === 'deposit') {
    total = total + obj.amount;
  } else {
    total = total - obj.amount;
  }
  return total;
};
console.log('Balance all numbers: ', account.reduce(balance, 0));

// Composite
const composite = (combo, obj) => {
  return Object.assign(combo, obj);
};
console.log('composite : ', traits.reduce(composite));
