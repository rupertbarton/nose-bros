const txtToArray = require("./txt-to-array");

const data = txtToArray(__dirname + "/nose-bros-chat.txt")

const people = [
    'Robin Watson',
    'Elliott Reid',
    'Rupert Barton',
    'Matthew Beanland',
    'Joseph Crone:mario-walking:',
    'Jessica Simpson',
    'Sam Ornsby',
    'Adam Watson',
    'Lewis Thompson:safc:',
    'Annabel Canham',
    'Gurveer Arora',
    'Beth Pritchard:alien:',
    'Samantha Reid'
]

const main = () => {

    const count = {}

    for (let i = 0; i < data.length; i++) {
        if (containsLeftOrRight(data[i])) {
            let j = i-1
            let person;
            while (!people.includes(person)) {
                person = data[j].split("  ")[0]
                j--
            }
            const dominantNostril = leftOrRight(data[i])
            if (!count[person]) {
                count[person] = {}
            }
            if (!count[person][dominantNostril]) {
                count[person][dominantNostril] = 1
            } else count[person][dominantNostril]++
        }
    }

    console.log(count)
}
    
const containsLeftOrRight = string => {
    return string.toLocaleLowerCase().includes("right") 
    || string.toLocaleLowerCase().includes("left") 
    || string.toLocaleLowerCase().includes("transitioning")
}

const leftOrRight = string => {

    const nostrils = ["right", "left", "transitioning"]

    for (let i = 0; i < nostrils.length; i++)
    if (string.toLocaleLowerCase().includes(nostrils[i])) {
        return nostrils[i]
    }
}

main()