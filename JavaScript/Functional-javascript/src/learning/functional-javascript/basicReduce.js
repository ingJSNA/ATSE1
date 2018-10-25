function countWords(inputWords) {
    // SOLUTION GOES HERE
    return inputWords.reduce(function (allWords, word) {
        if (word in allWords) {
            allWords[word]++;
        }
        else {
            allWords[word] = 1;
        }
        return allWords;
    }, {}); // second argument to reduce initialises allWords to {}

}

module.exports = countWords
