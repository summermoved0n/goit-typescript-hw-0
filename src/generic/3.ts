/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<TypeA extends object, TypeB extends object>(
  objA: TypeA,
  objB: TypeB
): TypeA & TypeB {
  return Object.assign({}, objA, objB);
}

const merged = merge<{ name: string }, { age: number }>(
  { name: "Alisa" },
  { age: 28 }
);

console.log(merged.name);
console.log(merged.age);

export {};
