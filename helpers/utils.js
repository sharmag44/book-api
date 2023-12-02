'use strict';


exports.difference = (arrayOne, arrayTwo, by) => {
    //Find values that are in arrayOne but not in arrayTwo
    var uniqueOne = arrayOne.filter(function (obj) {
        return !arrayTwo.some(function (obj2) {
            return obj[by] == obj2[by];
        });
    });
    //Find values that are in arrayTwo but not in arrayOne
    var uniqueTwo = arrayTwo.filter(function (obj) {
        return !arrayOne.some(function (obj2) {
            return obj[by] == obj2[by];
        });
    });

    return uniqueOne.concat(uniqueTwo);
}

exports.createUniqueCode = async (model) => {
    try {
        let code = '00000';
        let count = await db[model].count();
        count = count.toString();
        code = code.substring(0, code.length - count.length);
        return `${code + (+count + 1)}`;
    } catch (err) {
        throw err;
    }
};

exports.getRandomString = (length) => {
    var randomChars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
        result += randomChars.charAt(
            Math.floor(Math.random() * randomChars.length)
        );
    }
    return result;
};