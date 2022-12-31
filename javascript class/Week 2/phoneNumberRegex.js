// Returns true when the given string has the correct format of a phone number:
// '(XXX) XXX-XXXX' or '(XXX)XXX-XXXX' or 'XXX-XXX-XXXX' or 'XXXXXXXXXX'. Returns false otherwise.
// @param phoneNumberInputString a given string to check.
function checkPhoneNumber(phoneNumberInputString) {
  // TODO: Add RegExp pattern here.
  const regex = new RegExp(/^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/);
  // TODO: Finish the right side of the next line. Do not change anything else.
  let result = regex.test(phoneNumberInputString);
  return result;
}

console.log(checkPhoneNumber("(949) 111-1111")); // Should return true.
checkPhoneNumber("(949)111-1111"); // Should return true.
checkPhoneNumber("949-111-1111"); // Should return true.
checkPhoneNumber("9491111111"); // Should return true.
checkPhoneNumber("94911111111"); // Should return false.
console.log(checkPhoneNumber("")); // Should return false.

// DO NOT CHANGE ANYTHING AFTER THIS LINE.
module.exports = checkPhoneNumber;
