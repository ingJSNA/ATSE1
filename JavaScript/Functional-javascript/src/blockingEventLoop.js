function repeat(operation, num) {
    // modify this so it can be interrupted

    if (!this.count) {
        this.count = 1;
    }

    //console.log(num, count++);

    if (num <= 0) {
        return
    } else {
        operation();

        // release control every 10 or so iterations.
        // 10 is arbitrary.

        if (num % 20 === 0) {
            return setTimeout(() => { repeat.apply(this, [operation, --num]) }, 1);
        } else {
            return repeat.apply(this, [operation, --num]);
        }
    }
}


module.exports = repeat