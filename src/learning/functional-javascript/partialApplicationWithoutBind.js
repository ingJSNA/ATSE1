var slice = Array.prototype.slice

function logger(namespace) {
    // SOLUTION GOES HERE
    function log(){
        args = slice.apply(arguments)
        
        message = namespace.concat(" ").concat(args.join(' '));
        console.log(message);
    }
    return log;
}

module.exports = logger
