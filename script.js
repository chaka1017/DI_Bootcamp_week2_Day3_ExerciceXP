// ================= EXERCICE 1 ==================
const people = ["Greg", "Mary", "Devon", "James"];

// ***Partie 1***
// 1
people.splice(0, 1);
// 2
people[people.indexOf("James")] = "Jason";
// 3
people.push("Ange");
// 4
console.log(people.indexOf("Mary"));
// 5
var people_copy = people.slice(1, -1);
// 6
var index_of_foo = people.indexOf("Foo"); // Renvoie -1 car "Foo" n'existe pas dans la liste people
console.log(people_copy);
// 7
var last = people[people.length - 1];

// ***Partie 2***
// 1
for (let el of people) {
  console.log(el);
}
// 2
for (let el of people) {
  console.log(el);
  if (el == "Jason") {
    break;
  }
}

// ================= EXERCICE 2 ==================

const colors = ["bleu", "rouge", "noir", "vert", "jaune"];
for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}
// Bonus
for (let i = 0; i < colors.length; i++) {
  if (i == 0) {
    console.log(`My #${i + 1}st choice is ${colors[i]}`);
  } else if (i == 1) {
    console.log(`My #${i + 1}nd choice is ${colors[i]}`);
  } else if (i == 2) {
    console.log(`My #${i + 1}rd choice is ${colors[i]}`);
  } else {
    console.log(`My #${i + 1}th choice is ${colors[i]}`);
  }
}

// ================= EXERCICE 3 ==================
// 1
var num1 = Number(prompt("Saisissez un nombre"));
console.log(typeof num1);
// 2
while (num1 < 10) {
  num1 = Number(prompt("Saisissez un nombre"));
}

// ================= EXERCICE 4 ==================
// 1
const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};
// 2
console.log(building.numberOfFloors);
// 3
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);
// 4
console.log(building.nameOfTenants[2]);
console.log(building.numberOfRoomsAndRent.dan[0]);
// 5
if (
  building.numberOfRoomsAndRent.sarah[1] +
    building.numberOfRoomsAndRent.david[1] >
  building.numberOfRoomsAndRent.dan[1]
) {
  building.numberOfRoomsAndRent.dan[1] -= 1200;
}
console.log(building);

// ================= EXERCICE 5 ==================
// 1
var family = {
  key1: "val2",
  key2: "val2",
  key3: "val3",
  key4: "val4",
};
// 2 and 3
for (let key in family) {
  console.log(key);
  console.log(family[key]);
}

// ================= EXERCICE 6 ==================
const details = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};
var sentence = "";
for (let key in details) {
  sentence += `${key} ${details[key]} `;
}
console.log(sentence);

// ================= EXERCICE 6 ==================
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
society_name = "";
for (let el of names) {
  society_name += el[0];
}
console.log(society_name);
