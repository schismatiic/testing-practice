const capitalize = (str) => {
  let stringToArray = str.split([""]);
  let newArray = [];
  stringToArray.forEach((element, index) => {
    if (index === 0) {
      newArray.push(element.toUpperCase());
    } else {
      newArray.push(element);
    }
  });
  const newString = newArray.join("");
  return newString;
};
export { capitalize };
