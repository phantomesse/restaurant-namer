import { getRandomValueFromArray } from './utils.js';

const _PREFIXES = [
  'Jade',
  'Happy',
  'Joyful',
  'Wealthy',
  'Lucky',
  'Golden',
  'Zen',
  'Bamboo',
  'Red',
  'Imperial',
  'Spicy',
];

const _SUFFIXES = [
  'Panda',
  'Dragon',
  'Garden',
  'Palace',
  'Balcony',
  'Pagoda',
  'Lantern',
  'Wok',
  'Lotus',
  'Buddha',
];

export function generateAsianRestaurantName() {
  const prefix = getRandomValueFromArray(_PREFIXES);
  const suffix = getRandomValueFromArray(_SUFFIXES);
  return `${prefix} ${suffix}`;
}

export const ASIAN_RESTAURANT_FONT_NAMES = [
  'Chow Fun',
  'Karate',
  'Shikamaru',
  'Sudoku',
];
