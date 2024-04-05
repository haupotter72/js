// truy cap vao array
const actor = ["potter", "harry", "ron"];
document.getElementById("demo").innerHTML = actor;

// chuyen array sang string
const Animals = ["dog", "cho", "meo", "cat"];
document.getElementById("demo").innerHTML = Animals.toString();

// get length cua array

let size = Animals.length;
document.getElementById("demo").innerHTML = size;

// truy cap phan tu dau tien va cuoi cung cua array

let animal1 = Animals[0];
let animal2 = Animals[Animals.length - 1];

//lap qua mot mang bang for

let text = "<ul>";
Animals.forEach(myFunction);
text += "</ul>";

document.getElementById("demo").innerHTML = text;

function myFunction(value) {
  text += "<li>" + value + "</li>";
}

// them phan tu array
Animals.push("kitty");

// nhan biet array

let type = typeof Animals;

// cac phuong thuc cua array

let person = Animals.at(2);

document.getElementById("demo").innerHTML = Animals.join(" * ");

Animals.pop();

Animals.shift(); // bo phan tu dau

document.getElementById("demo1").innerHTML =
  "The first animal is: " + Animals[0];

delete Animals[0];
// sap nhap 2 mang
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);

document.getElementById("demo").innerHTML = myChildren;
// copy phan tu vao mang:

document.getElementById("demo").innerHTML = Animals.copyWithin(2, 0);

// them cac muc vao phan tu cua mang
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;

fruits.splice(2, 0, "Lemon", "Kiwi");
document.getElementById("demo2").innerHTML = fruits;

let position = fruits.indexOf("Apple") + 1;

document.getElementById("demo").innerHTML = "Apple is found in position " + position;


// array sort
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction1() {
  points.sort();
  document.getElementById("demo").innerHTML = points;
}

function myFunction2() {
  points.sort(function(a, b){return a - b});
  document.getElementById("demo").innerHTML = points;
}

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});


const points1 = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}
// tim so thap nhat trong mang:
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

// tim so cao nhat trong mang:function myArrayMax(arr) {
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

// nhan 2 cho tung phan tung trong mang : const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

document.getElementById("demo").innerHTML = numbers2;

function myFunction(value, index, array) {
  return value * 2;
}
// chon ra phan tu > so duoc chon trong mang
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

document.getElementById("demo").innerHTML = over18;

function myFunction(value, index, array) {
  return value > 18;
}

// tong cac phan tu trong mang
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

document.getElementById("demo").innerHTML = "The sum is " + sum;

function myFunction(total, value, index, array) {
  return total + value;
}


