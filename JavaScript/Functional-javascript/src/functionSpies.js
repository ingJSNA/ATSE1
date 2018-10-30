function Spy(target, method) {
    // SOLUTION GOES HERE

    this.count = 0;
    let original_method = target[method];

    target[method] = function () {
        count++;
        return original_method.apply(this, arguments);
    }

    return this;
}

module.exports = Spy