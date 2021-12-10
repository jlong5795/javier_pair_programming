/* Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing. */

/* Example

For sequence = [1, 3, 2, 1], the output should be
solution(sequence) = false.

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
solution(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].
*/

const sequence = [1, 3, 2, 1] // false
const sequence2 = [1, 3, 2] // true
const sequence3 = [3] // true

function solution(sequence) {
    if(sequence.length === 1) {
        return true
    }




    return false
}

function test() {
    if (solution(sequence) === false) { 
        console.log(`Test 1 Passed`)
    } else {
        console.log(`Test 1 Failed`)
    }
    if (solution(sequence2) === true) { 
        console.log(`Test 2 Passed`)
    } else {
        console.log(`Test 2 Failed`)
    }
    if (solution(sequence3) === true) { 
        console.log(`Test 3 Passed`)
    } else {
        console.log(`Test 3 Failed`)
    }
}

test()