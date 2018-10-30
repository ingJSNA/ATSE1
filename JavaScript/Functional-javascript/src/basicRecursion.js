function reduce(arr, fn, initial) {
    // SOLUTION GOES HERE
    let index = 0;
    let prev = initial;

    (function recursive() {
        if (index >= arr.length) {
            return [];
        } else {
            curr = arr[index];
            prev = fn(prev, curr, index, arr);
            index++;
            recursive();
        }
    })();
    return prev;
}

module.exports = reduce
