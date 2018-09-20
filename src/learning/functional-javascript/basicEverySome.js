function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
      // SOLUTION GOES HERE
      return submittedUsers.every(y => goodUsers.some(x => x === y));
    };
  }
  
  module.exports = checkUsersValid
