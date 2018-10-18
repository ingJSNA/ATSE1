function curryN(fn, n) {
    // SOLUTION GOES HERE
    if (!n) {
        n = fn.length; // arity
    }

    if(!this.params){
        this.params = [];
    }

    console.log('Params: ', params);
    if(n === 0){
        
        return fn.apply(undefined, params);
    }else{
        return function(param){
            params.push(param);
            return curryN.bind(this, fn, --n);
        }
    }
}

module.exports = curryN

function add3(one, two, three) {
    return one + two + three
}

var curryC = curryN(add3)
var curryB = curryC(1)
var curryA = curryB(2)
console.log(curryA(3)) // => 6
console.log(curryA(10)) // => 13

console.log(curryN(add3)(1)(2)(3)) // => 6
