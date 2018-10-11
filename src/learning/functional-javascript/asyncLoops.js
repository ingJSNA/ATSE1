var seedrandom = require('seedrandom');

function loadUsersSlow(userIds, load, done) {
    console.time('loadUsersSlow');
    var users = []
    for (var i = 0; i < userIds.length; i++) {
        users.push(load(userIds[i]))
    }
    console.timeEnd('loadUsersSlow');
    done(users);
    return users
}

// Fast version
//
async function loadUsers(userIds, load, done) {
    console.time('loadUsersFast');

    //map arry to promises
    const promises = userIds.map(async (x) => { const y = await load(x); return y });
    await Promise.all(promises);

    console.timeEnd('loadUsersFast');
    done(users);

    return users
}

module.exports = loadUsers

// TEST CODE



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRndIntegerSeed(seed, min, max) {
    let random = seedrandom(seed);
    return Math.floor(random * (max - min + 1)) + min;
}

// All deepEqual impls (assert, deep-eql…) seem to b0rk when multiple objects
// in an array share the same `id` value (wtf?!), so we make sure they're unique.
var userCount = getRndInteger(10, 30)
let users = []
let userIds = []

while (users.length < userCount) {
    let id = getRndInteger(0, 1000);
    let name = "user" + id;
    if (-1 !== userIds.indexOf(id)) continue
    userIds.push(id);
    users.push({ id, name });
}

const sleep = (milliseconds) => {
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while (curDate - date < milliseconds);
}

let load = function (id) {

    sleep(id);

    let match = users.filter(user => user.id === id);
    if (match.length) return match[0];
    else return null;

}

function compareUsers(object1) {
    let areEqual = JSON.stringify(object1) === JSON.stringify(users);
    console.log("They are equal?: ", areEqual);
}

if (false) {
    console.log(userCount);
    let find_id = users[users.length - 1].id;
    console.log("Search: ", find_id);
    console.log(users.filter(user => user.id === find_id));
    console.log("Load: ", load(find_id));

    loadUsersSlow(userIds, load, compareUsers);

    loadUsers(userIds, load, compareUsers);
}