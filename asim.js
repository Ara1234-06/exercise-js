// DIFFERRENCE BETWEEN = is used for assining things / == is used for comparing the values/ === is compare the values and also the data types/

const a = "18";

if (a == 18) {
  console.log("right");
} else {
  console.log("wrong");
}

// / Exercise: Given an array of products, filter only the products that are in stock
// and return an array with their names in uppercase

const products = [
  { id: 1, name: "Laptop", price: 999, inStock: true },
  { id: 2, name: "Mouse", price: 25, inStock: false },
  { id: 3, name: "Keyboard", price: 75, inStock: true },
  { id: 4, name: "Monitor", price: 350, inStock: false },
  { id: 5, name: "Headphones", price: 85, inStock: true },
];

const result = products.filter((product) => product.inStock);

const examScores = [
  { student: "Alex", score: 45 },
  { student: "Beth", score: 65 },
  { student: "Carl", score: 55 },
  { student: "Dana", score: 70 },
  { student: "Eric", score: 80 },
];

let user = [
  { student: "Alex", score: 45 },
  { student: "Beth", score: 65 },
  { student: "Carl", score: 55 },
  { student: "Dana", score: 70 },
  { student: "Eric", score: 80 },
];
let userage = user.map(function (element) {
  return element.score * 2;
});

const filterscore = userage.filter(checkscore);

function checkscore(userage) {
  return userage >= 100;
}
console.log(filterscore);
