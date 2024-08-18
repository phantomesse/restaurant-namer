import {
  ASIAN_RESTAURANT_FONT_NAMES,
  generateAsianRestaurantName,
} from './asian-restaurants.js';
import { generateHipsterRestaurantName } from './hipster-restaurants.js';
import { getRandomValueFromArray, getUrlParam } from './utils.js';

// Get type of restaurant to generate a name for.
const restaurantType = getUrlParam('restaurantType') ?? 'asian';
const restaurantTypeToGeneratorFunctionMap = {
  asian: generateAsianRestaurantName,
  hipster: generateHipsterRestaurantName,
};
document.getElementById('restaurant-type').value = restaurantType;

// Generate a random restaurant name.
const restaurantName = restaurantTypeToGeneratorFunctionMap[restaurantType]();
document.getElementById('restaurant-name').innerText = restaurantName;

// Set the font.
const restaurantTypeToFontNamesMap = {
  asian: ASIAN_RESTAURANT_FONT_NAMES,
};
const fontName = getRandomValueFromArray(
  restaurantTypeToFontNamesMap[restaurantType] ?? []
);
if (fontName) {
  document.documentElement.style.setProperty(
    '--restaurant-name-font-family',
    `${fontName}`
  );
}
