/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

type DuoType = any;

function merge<TypeA, TypeB>(objA: TypeA, objB: TypeB) {
  return Object.assign({}, objA, objB);
}

const merged = merge<DuoType, DuoType>({ name: "Alisa" }, { age: 28 });

console.log(merged.name);
console.log(merged.age);

export {};
