'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
const numbersWithDuplicates = [2, 42, 5, 42, 304, 1, 13, 2, 13];

//go from array -> set -> array, niiice
const uniqueNumbers = [...new Set(numbersWithDuplicates)];

console.log(`Changed ${numbersWithDuplicates} to ${uniqueNumbers}`);


//Above will NOT work for objects
//A more general solution working for objects would be below
const objectsWithDuplicates = [{val:2}, {val:42}, {val:5}, {val:42}, {val:304}, {val:1}, {val:13}, {val:2}, {val:13}];

function removeDuplicates(_array) {
    return _array.filter((value, index) => {
        const _value = JSON.stringify(value);
        return index === _array.findIndex(obj => {
            return JSON.stringify(obj) === _value;
         });
  });
}

const uniqueObjects = removeDuplicates(objectsWithDuplicates);
console.log(uniqueObjects);


function createPet (_sgen)
{
    const pet = {}

    pet.name = _sgen.petName;
    pet.mood = _sgen.fromString('happy, hungry, sleepy');
    pet.kind = _sgen.fromString('bird, fish, dog, cat');

    return pet;
}

const _seeder = new seedGenerator();

//create one pet
const p = createPet(_seeder);
console.log(p);

//create 1000 pets
const pets = _seeder.toArray(1000, createPet);
console.log(pets);

/* Excercise
1. remove the duplicates from pets and print out the result
*/
