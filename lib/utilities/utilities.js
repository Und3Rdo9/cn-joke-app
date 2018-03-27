export const updateObject = (oldObject, newValues) => {
  // Encapsulate the idea of passing a new object as the first parameter
  // to Object.assign to ensure we correctly copy data instead of mutating
  return Object.assign({}, oldObject, newValues);
};

export const mapArrayIntoObject = (arr) => {
  return arr.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
  }, {});
};

export const removeFromArray = (array, element) => {
  return array.filter( (e) => e !== element);
};
