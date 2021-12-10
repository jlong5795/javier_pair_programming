/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
*/

const statues = [6, 2, 3, 8];

function solution (statues) {
    let numMissingStatues = 0;
    statues.sort((a, b) => {
        return a - b
    }) 
    // [2,3,6,8]
    
    for (let i = 0; i < statues.length - 1; i++) {
       // how many statues are in the current gap
       const gap = (statues[i+1] - statues[i])
       if (gap !== 1) {
           numMissingStatues += gap - 1
       }
    }
    return numMissingStatues;
};

console.log("🚀 ~ file: statues.js ~ line 24 ~ solution(statues)", solution(statues))
