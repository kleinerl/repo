const assert = require('assert').strict;
const {createPerson}=require("./classes");
const RelationsUtility=require("./relationsUtility");

const persons=RelationsUtility.readFile("./persons.txt");
let relationsUtility=new RelationsUtility();
relationsUtility.Init(persons);

const person1=createPerson("Aa","Bb","Cc","Dd");
const person2=createPerson("A5","B5","C5","D5");
const person3=createPerson("A5","B5","Cc","Dd");
const person4=createPerson("Aa","Bb","Cc","Dd");

const mosheDayan=createPerson("Moshe","Dayan","C","Dd");
const vladimirPutin=createPerson("Vladimir","Putin","Cc","Dd");
console.log(`related=${relationsUtility.FindMinRelationLevel(mosheDayan,vladimirPutin)}`);

assert.strictEqual(relationsUtility.FindMinRelationLevel(mosheDayan,vladimirPutin),-1);

assert.strictEqual(relationsUtility.FindMinRelationLevel(person1,person2),2);
assert.strictEqual(relationsUtility.FindMinRelationLevel(person1,person3),1);