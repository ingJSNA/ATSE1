function getDependencies(tree) {
    // SOLUTION GOES HERE
    // Note: Feel free to add additional arguments
    // to this function for use with recursive calls.
    // Or not! There are many ways to recurse.

    if (!this.uniqueDependencies) {
        this.uniqueDependencies = new Set();
    }

    if (Object.prototype.hasOwnProperty.call(tree, 'dependencies')) {
        Object.entries(tree.dependencies).forEach(([key, value]) => {
            uniqueDependencies.add(key + '@' + value.version);
            getDependencies.call(this, value);
        });
    }
    return Array.from(uniqueDependencies).sort();
}

module.exports = getDependencies

let loremIpsum = {
    "name": "lorem-ipsum",
    "version": "0.1.1",
    "dependencies": {
        "optimist": {
            "version": "0.3.7",
            "dependencies": {
                "wordwrap": {
                    "version": "0.0.2"
                }
            }
        },
        "inflection": {
            "version": "1.2.6"
        }
    }
}

//console.log("getDependencies: ", getDependencies(loremIpsum));
