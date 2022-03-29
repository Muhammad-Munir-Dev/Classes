// Pass by Value
function Passbyvalue(value1, value2) {
  let tmp;
  tmp = value2;
  value2 = value1;
  value1 = tmp;
  console.log(`Inside Pass by value Function -> value1 = ${value1} value2 = ${value2}`);
}
  
let value1 = 10;
let value2 = 20;
console.log(`Before calling Pass by value Function -> value1 = ${value1} value2 = ${value2}`);
  
Passbyvalue(value1, value2);
  
console.log(`After calling Pass by value Function -> value1 = ${value1} value2 = ${value2}`);

// Pass by Reference
function PassbyReference(reference) {
  let tmp = reference.reference1;
  reference.reference1 = reference.reference2;
  reference.reference2 = tmp;

  console.log(`Inside Pass By Reference Function -> reference1 = ${reference.reference1} reference2 = ${reference.reference2}`);
}

let reference = {
  reference1: 10,
  reference2: 20

}
console.log(`Before calling Pass By Reference Function -> reference1 = ${reference.reference1} reference2 = ${reference.reference2}`);

PassbyReference(reference)

console.log(`After calling Pass By Reference Function -> reference1 = ${reference.reference1} reference2 = ${reference.reference2}`);


let elements = { 'a' : 'Muhammad', 'b' : 'Munir' };
console.log(elements);
let element_array = [];
for (let key in elements) {
  element_array.push(key);
}
console.log('Obj keys');
console.log(element_array);
console.log(Object.keys(elements));

console.log('Obj Values');
console.log(Object.values(elements));