function IntegerToRoman () {

}

var numeral = function(value, numeral) {
    return {value: value, numeral: numeral};
};

var numerals = [
    numeral(1000, "M"),
    numeral(900, "CM"),
    numeral(500, "D"),
    numeral(400, "CD"),
    numeral(100, "C"),
    numeral(90, "XC"),
    numeral(50, "L"),
    numeral(40, "XL"),
    numeral(10, "X"),
    numeral(9, "IX"),
    numeral(5, "V"),
    numeral(4, "IV"),
    numeral(1, "I"),
];

IntegerToRoman.prototype.convert = function(integer) {
    var result = '';
    numerals.forEach(function(item) {
        for (; integer >= item.value; integer -= item.value) {
            result += item.numeral;
        }
    });
    return result;
};

