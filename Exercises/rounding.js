function rounding(precision, rounded) {
    result = parseFloat(precision.toFixed(rounded))
    if (result > 15) {
        result = 15;
        console.log(result)
    } else {
        console.log(result)
    }
} rounding(12.123123141, 3)