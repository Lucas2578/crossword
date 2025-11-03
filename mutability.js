const person = {
  name: 'Rick',
  age: 77,
  country: 'US',
};

const samePerson = person;

const clone1 = { ...person };
const clone2 = { ...person }; 

// Modify the original person
person.age += 1;
person.country = 'FR';