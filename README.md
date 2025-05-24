# Credit Card Validator

This project provides a function to validate credit card numbers for the most commonly used card brands, including Visa, MasterCard, American Express, and Discover. It implements the Luhn algorithm for validation and identifies the card brand based on the card number's prefix and length.

## Purpose

The main objective of this application is to allow users to input a credit card number and validate its authenticity, ensuring it corresponds to a recognized card brand.

## Usage Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies by running:
   ```
   npm install
   ```
4. Use the `validateCard` function from the `src/validateCard.js` file to validate credit card numbers.

## Example

To validate a credit card number, you can use the following example code in your application:

```javascript
const { validateCard } = require('./src/validateCard');

const cardNumber = '4111111111111111'; // Example Visa card number
const result = validateCard(cardNumber);

console.log(result); // Outputs the validation result and card brand
```

## License

This project is licensed under the MIT License.