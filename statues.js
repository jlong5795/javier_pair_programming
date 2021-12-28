/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
*/

const statues = [6, 2, 3, 8];

function solution (statues) {
    // step 1: Sort the statues from smallest to largest
    const missingStatueArr = []
    statues.sort((a, b) => {
        return a - b
    })
    // return console.log(statues);
    // step 2: Loop through the array of statues [2, 3, 6, 8]
    for (let i = 0; i < statues.length - 1; i++) {
        // step 3: evaluate the current number +1 and see if it equals the next number
        
        if(statues[i] + 1 === statues[i + 1]) {
            // step 4: If when we add +1 to our current number and it equals the next number, continue to the next number in the for loop
            // console.log(statues[i] + 1, statues[i + 1]);
            continue
        }
        // step 4b: If they're not equal, create a list of the missing statues
        else {
            
            missingStatueArr.push(statues[i] + 1)
        }
    }
    console.log(missingStatueArr);

};

solution(statues)