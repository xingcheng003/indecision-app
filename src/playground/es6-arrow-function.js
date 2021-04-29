const fullName = "Mike Smith";

const getFirstName = (fullName) => {
  return fullName.split(" ")[0];
};

console.log(getFirstName(fullName));

const multiplier = {
  number: [1, 3, 5],
  multiplyBy: 3,
  multiply() {
    return this.number.map((nu) => nu * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
