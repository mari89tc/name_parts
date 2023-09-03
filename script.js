const fullName = "Marie Engestoft Kjærside";
const firstSpaceIndex = fullName.indexOf(" ");
const lastSpaceIndex = fullName.lastIndexOf(" ");

const firstName = fullName.substring(0, firstSpaceIndex);
const middleName = fullName.substring(firstSpaceIndex + 1, lastSpaceIndex);
const lastName = fullName.substring(lastSpaceIndex + 1);

console.log(firstName);
console.log(middleName);
console.log(lastName);

//prøv med andre navne
// const fullName = "Anton Vinther Hansen";
// const firstSpaceIndex = fullName.indexOf(" ");
// const lastSpaceIndex = fullName.lastIndexOf(" ");

// const firstName = fullName.substring(0, firstSpaceIndex);
// const middleName = fullName.substring(firstSpaceIndex + 1, lastSpaceIndex);
// const lastName = fullName.substring(lastSpaceIndex + 1);

// console.log(firstName);
// console.log(middleName);
// console.log(lastName);
