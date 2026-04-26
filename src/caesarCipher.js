const caesarCipher = (str, shift_factor) => {
  const alphabet1 = "abcdefghijklmnopqrstuvwxyz".split("");
  const alphabet2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const punctuation = "!@#$%^&*()_+-=[]{}|;:',.<>?/`~¿¡".split("");
  const emptyArray = [" "];
  const stringToArray = str.split("");
  const newArray = [];
  for (let i = 0; i < stringToArray.length; i++) {
    for (let j = 0; j < alphabet1.length; j++) {
      if (stringToArray[i] === alphabet1[j]) {
        newArray.push(
          alphabet1[
            j + shift_factor < 26 ? j + shift_factor : j + (shift_factor - 26)
          ],
        );
      } else if (stringToArray[i] === alphabet2[j]) {
        newArray.push(
          alphabet2[
            j + shift_factor < 26 ? j + shift_factor : j + (shift_factor - 26)
          ],
        );
      } else if (stringToArray[i] === punctuation[j]) {
        newArray.push(stringToArray[i]);
      } else if (stringToArray[i] === emptyArray[j]) {
        newArray.push(emptyArray[j]);
      }
    }
  }
  const newString = newArray.join("");
  return newString;
};
export { caesarCipher };
