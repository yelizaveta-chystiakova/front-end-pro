const smaller = (array) => {
    if (!array || array.length === 0) {
        return []
    }

    const negativeNumbers = array.filter((num) => num < 0);
    const positiveNumbers = array.filter((num) => num > 0);
    const negativeSum = negativeNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return [positiveNumbers.length, negativeSum]
}
