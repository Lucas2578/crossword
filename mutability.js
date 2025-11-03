const person = {
  name: 'Rick',
  age: 78,
  country: 'FRs',
}

const samePerson = person
const clone1 = Object.freeze(person)
const clone2 = Object.freeze(person)