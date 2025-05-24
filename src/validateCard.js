function validateCard(cardNumber) {
    const cardNumberStr = cardNumber.toString().replace(/\D/g, '');
    const cardLength = cardNumberStr.length;

    // Luhn algorithm implementation
    const luhnCheck = (num) => {
        let sum = 0;
        let shouldDouble = false;

        for (let i = num.length - 1; i >= 0; i--) {
            let digit = parseInt(num.charAt(i), 10);

            if (shouldDouble) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }

            sum += digit;
            shouldDouble = !shouldDouble;
        }

        return sum % 10 === 0;
    };

    // Card brand identification
    const getCardBrand = (num) => {
        const brands = {
            Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
            MasterCard: /^5[1-5][0-9]{14}$/,
            AmericanExpress: /^3[47][0-9]{13}$/,
            Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/
        };

        for (const [brand, regex] of Object.entries(brands)) {
            if (regex.test(num)) {
                return brand;
            }
        }
        return 'Unknown';
    };

    if (!luhnCheck(cardNumberStr)) {
        return { valid: false, brand: 'Invalid card number' };
    }

    const brand = getCardBrand(cardNumberStr);
    return { valid: true, brand };
}

export default validateCard;