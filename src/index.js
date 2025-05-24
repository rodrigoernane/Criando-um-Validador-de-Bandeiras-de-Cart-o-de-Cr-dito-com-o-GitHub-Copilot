// This file serves as the entry point for the application.
// It imports the validateCard function and handles user input.

import { validateCard } from './validateCard.js';

// Example usage
const cardNumber = '4111111111111111'; // Example Visa card number
const result = validateCard(cardNumber);

if (result.isValid) {
    console.log(`The card number ${cardNumber} is valid and is a ${result.brand} card.`);
} else {
    console.log(`The card number ${cardNumber} is invalid.`);
}