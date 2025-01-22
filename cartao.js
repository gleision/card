function getCardFlag(cardNumber) {
    const cardPatterns = {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        amex: /^3[47][0-9]{13}$/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/
    };

    for (const [flag, pattern] of Object.entries(cardPatterns)) {
        if (pattern.test(cardNumber)) {
            return flag;
        }
    }

    return 'unknown';
}

// Exemplo de uso:
const cardNumber = '4111111111111111';
const cardFlag = getCardFlag(cardNumber);
console.log(`A bandeira do cartão é: ${cardFlag}`);