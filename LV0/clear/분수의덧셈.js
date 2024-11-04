// 두 분수를 더한 값을 기약 분수로 나타냈을 때 
// 분자와 분모를 순서대로 담은 배열을 return
const numer1 = 1
const denom1 = 2	
const numer2 = 3	
const denom2 = 4

function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1 * denom2 + numer2 * denom1;
    let denom = denom1 * denom2;
    let answer = [numer, denom];

    const limit = Math.max(numer, denom);
    for(let i = 2; i <= limit; i++){
        let nn = numer / i;
        let nd = denom / i;
        if(Number.isInteger(nn) && Number.isInteger(nd)){
            answer = [nn, nd]
        }
    }
    
    return answer;
}

solution(numer1, denom1, numer2, denom2);

// node LV0/분수의덧셈.js