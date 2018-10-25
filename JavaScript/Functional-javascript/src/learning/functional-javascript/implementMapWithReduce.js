module.exports = function arrayMap(arr, fn) {
    // SOLUTION GOES HERE
    if (!Array.prototype.mapUsingReduce) {
        Array.prototype.mapUsingReduce = function (callback, thisArg) {
            return this.reduce(function (mappedArray, currentValue, index, array) {
                mappedArray[index] = callback.call(thisArg, currentValue, index, array);
                return mappedArray;
            }, []);
        };
    }
    return arr.mapUsingReduce(fn);
}
