import { getRandomValueFromArray } from './utils.js';

const _WORDS = [
  'Wheat',
  'Straw',
  'Salt',
  'Earth',
  'Fire',
  'Birch',
  'Heather',
  'Willow',
  'Charcoal',
  'Coal',
];

const _OPERATORS = ['&', '+'];

export function generateHipsterRestaurantName() {
  const word1 = getRandomValueFromArray(_WORDS);
  const word2 = getRandomValueFromArray(_WORDS.filter(word => word !== word1));
  const operator = getRandomValueFromArray(_OPERATORS);
  return `${word1} ${operator} ${word2}`;
}
