function duckCount() {
    // SOLUTION GOES HERE
    return Array.prototype.filter.call(
        arguments,
        x => Object.prototype.hasOwnProperty.call(x, 'quack')).length;
}

module.exports = duckCount
