const fs = require('fs');
const {createPerson}=require("./classes");

class RelationsUtility {

    Init(persons) {
        this.persons= persons;
    }
    FindMinRelationLevel(personA, personB) {
        //creating copy for reusing
        let personList=[...this.persons];
        //console.log(this.personsList);
        let stepsCounted = 1;
        let currentNodes = [personA];

        while (currentNodes.length) {
            //console.log(`currentNodes=${JSON.stringify(currentNodes)}`);
            //console.log(`personsList=${JSON.stringify(this.personsList)}`);
            for (let elt of currentNodes) {
                //console.log("elt="+JSON.stringify(elt));
                if (elt.isRelated(personB))
                    return stepsCounted;
            }

            let newCurrentNodes = [];
            for (let elt of currentNodes) {
                personList.forEach((possibleMove, index) => {
                    if (elt.isRelated(possibleMove)) {
                        newCurrentNodes.push(...personList.splice(index, 1));
                    }
                });
            }
            currentNodes = newCurrentNodes;
            stepsCounted++;
        }
        return -1;
    }

    static readFile(fileName) {
        const persons=[];
    
        var array = fs.readFileSync(fileName).toString().split(/\r\n|\n/);
        for (let i in array) 
            persons.push(createPerson( ...array[i].split(" ")));
        return persons;
    }
}

module.exports=RelationsUtility;