function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    if (num <= 0) return
    operation()
    return repeat.bind(this, operation, --num) // return a new function
}

function trampoline(fn) {
    // You probably want to implement a trampoline!
    let op = fn
    while (op != null && typeof op === 'function') {
        op = op();
    }
    return op
}

module.exports = function (operation, num) {
    // You probably want to call your trampoline here!
    return trampoline(repeat(operation, num));
}
