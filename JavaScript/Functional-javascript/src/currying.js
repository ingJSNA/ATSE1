function curryN(fn, n) {
    // SOLUTION GOES HERE

    if (!n) {
        n = fn.length; // arity
    }

    return function curriedN(arg) {
        if (n <= 1) return fn(arg)
        return curryN(fn.bind(this, arg), n - 1)
    }
}

module.exports = curryN

function add3(one, two, three) {
    return one + two + three
}

var curryC = curryN(add3)
var curryB = curryC(1)
var curryA = curryB(2)
//console.log(curryA(3)) // => 6
//console.log(curryA(10)) // => 13

//console.log(curryN(add3)(2)(3)(4)) // => 9
