function repeat(operation, num) {
    // modify this so it can be interrupted

    this._stop = false;

    this.setTimeout(() => { _stop = true }, 100);


    if (num <= 0 || _stop) return
    operation();
    return recursive(operation, --num);

}


module.exports = repeat