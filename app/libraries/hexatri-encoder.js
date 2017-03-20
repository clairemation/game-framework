// To avoid loss of precision, string MUST be 12 characters or less!
// If string is over 12 characters, all characters after the 12th will be ignored.

function EncodeHexatridecimal(string){
  try {
    if (string.length > 12){
      // Throw an error so we can get a stack trace
      throw new Error('EncodeHexatridecimal only accepts strings of 12 characters or less. Only first 12 characters accepted.');
    }
  } catch(ex) {
    console.warn(ex);
  }
  return parseInt(string.slice(0, 12), 36);
}

module.exports = EncodeHexatridecimal;