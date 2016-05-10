
enum AdjustmentType {
    round,
    floor,
    ceil
}

/**
 * Decimal adjustment of a number.
 *
 * @param {String}  type  The type of adjustment.
 * @param {Number}  value The number.
 * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
 * @returns {Number} The adjusted value.
 */
function decimalAdjust(type: AdjustmentType, value: number, exp: number): number {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
        return Math[AdjustmentType[type]](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
    }
    // Shift
    let shiftedValue = value.toString().split('e');
    value = Math[AdjustmentType[type]](+(shiftedValue[0] + 'e' + (shiftedValue[1] ? (+shiftedValue[1] - exp) : -exp)));
    // Shift back
    shiftedValue = value.toString().split('e');
    return +(shiftedValue[0] + 'e' + (shiftedValue[1] ? (+shiftedValue[1] + exp) : exp));
}

export function round10(value: number, exp: number): number {
    return decimalAdjust(AdjustmentType.round, value, exp);
}

export function floor10(value: number, exp: number): number {
    return decimalAdjust(AdjustmentType.floor, value, exp);
}

export function ceil10(value: number, exp: number): number {
    return decimalAdjust(AdjustmentType.ceil, value, exp);
}