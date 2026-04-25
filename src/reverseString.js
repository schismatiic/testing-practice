const reverseString = (str) => {
  let stringToArray = str.split([""]);
  let newArray = [];
  for (let index = stringToArray.length; index >= 0; index--) {
    newArray.push(stringToArray[index]);
  }
  const newString = newArray.join("");
  return newString;
};
export { reverseString };
