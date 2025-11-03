const person = {
  name: 'Rick',
  age: 77,
  country: 'US',
};

// Create shallow copies using spread syntax
const samePerson = { ...person }; // true clone
samePerson.age += 1;
samePerson.country = 'FR';

const clone1 = { ...person };
clone1.age += 1;
clone1.country = 'FR';
Object.freeze(clone1);

const clone2 = { ...person };
clone2.age += 1;
clone2.country = 'FR';
Object.freeze(clone2);