const A = "apple"
const B = "elppa"

function solution(A, B) {
    const reverseSplitedA = A.split('').reverse();
    const reverseB = B.split('').reverse().join('');

    let count = 0;
    while(count !== B.length){
        if(reverseSplitedA.join('') === reverseB) break;
        reverseSplitedA.push(reverseSplitedA.shift());
        count++;
    }
    
    return count === B.length ? -1 : count;
}

solution(A, B);

// node LV0/문자열밀기.js