const numlist = [10000,20,36,47,40,6,10,7000]
const n = 30

function solution(numlist, n) {
    var answer = [];
    let ansMap = new Map();
    
    numlist.forEach(e => {
        let getter = ansMap.get(Math.abs(e-n)) || [];
        getter.push(e);
        getter.sort((a, b) => b-a);
        ansMap.set(Math.abs(e-n), getter);
    });

    let sortedArr = [...ansMap].sort((a, b) => a[0] - b[0]).map(v => v[1]);
    sortedArr.forEach(sa => {
        answer.push(...sa);
    });

    return answer;
}

solution(numlist, n);

// node LV0/특이한정렬.js