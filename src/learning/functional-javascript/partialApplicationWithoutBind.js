var slice = Array.prototype.slice

function logger(namespace) {
    // SOLUTION GOES HERE
    function log(){
        args = slice.apply(arguments)
        console.log([namespace].concat(args).join(' '));
    }
    return log;
}

module.exports = logger
