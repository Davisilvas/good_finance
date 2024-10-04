const parseAllToFloat = obj => {
    let newObj = {}
    for (value in obj) {
        newObj[value] = parseFloat(obj[value])
        // console.log(`${newObj[value]} - ${typeof (newObj[value])}`)
    }
    return newObj
}

const validateObj = obj => {
    if (obj === null) return false;
    return true;
}

const sumAllValues = obj => {
    let total = 0;

    newObj = parseAllToFloat(obj);

    for (value in newObj) {
        total += newObj[value]
    }
    // console.log(total)
    return total;
}

const calcPercentage = (spendingValue, incomeValue) => {
    result = sumAllValues(spendingValue) / sumAllValues(incomeValue);
    console.log(`result ${result} spendings ${spendingValue}  income ${incomeValue}`)

    return result;
}



module.exports = {
    parseAllToFloat,
    sumAllValues,
    validateObj,
    calcPercentage
}