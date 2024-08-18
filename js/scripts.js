import { generateAsianRestaurantName } from './asian-restaurants.js';
import { generateHipsterRestaurantName } from './hipster-restaurants.js';
import { getUrlParam } from './utils.js';

const restaurantType = getUrlParam('restaurantType');
const restaurantTypeToGeneratorFunctionMap = {
  asian: generateAsianRestaurantName,
  hipster: generateHipsterRestaurantName,
};
document.getElementById('restaurant-type').value = restaurantType;

const restaurantName = restaurantTypeToGeneratorFunctionMap[restaurantType]();
document.getElementById('restaurant-name').innerText = restaurantName;
