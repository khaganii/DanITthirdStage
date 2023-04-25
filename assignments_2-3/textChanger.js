
let consonants = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z" ]


countsOfConsonants("asgd qjdfvwegfv qeurgfe yerfg");

function countsOfConsonants(text){
    let myMap = new Map();
    text = text.toUpperCase();
    console.log(text);
    
    for (let j = 0; j < consonants.length; j++) {
        let cons = consonants[j];
        for (let i = 0; i < text.length; i++) {
            let ch = text[i];
            if(cons === ch) {
                if(myMap.has(ch)) {
                    let count = myMap.get(ch);
                    myMap.delete(ch);
                    myMap.set(ch, count+1);
                }
                else{
                    myMap.set(ch, 1);
                }
            }
        }    
    }
    
//     console.log(myMap);
// }

// let data = ['hello', 'world', 23, '23', null];
// filterBy(data, 'number');
// function filterBy(data, type){
//     let results = [];
//         for (let i = 0; i < data.length; i++) {
//         let element = data[i];    
//         if(typeof element == type) {
//             results.push(element);
//         }
//     }
//     console.log(results);
// }