function getShortMessages(messages) {
    // SOLUTION GOES HERE
    results = messages.filter(obj => obj.message.length < 50).map(x => x.message);
    return results;
  }
  
  module.exports = getShortMessages