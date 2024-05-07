import { ADJECTIVES } from "./src/data/index.js";

const adjs = ADJECTIVES

const newArr = adjs.map((a) => {
  const value = a.value.split(' ');

  const obj = {
    id: a.id,
    value: value[0],
    russian: `${value[3]} ${value[4]} ${value[5]}`,
    russianSuper: value[3],
    state:null
  }
  return obj
})
console.log(newArr);