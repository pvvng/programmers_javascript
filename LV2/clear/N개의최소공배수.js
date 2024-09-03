const arr = [14, 2, 7]

function solution(arr) {
    // 가장 큰 수 pop
    let max = arr.sort((a, b) => a - b).pop();
    // 가장 큰수의 배수 중 남은 배열의 요소에서 모두 나머지가 남지 않는 것 산출
    for(let i = 1; i <= Infinity; i++){
        let multiplied = max * i;
        let passCounter = 0;
        arr.forEach(e => {
            if(multiplied % e === 0) passCounter ++; 
        });
        if(passCounter === arr.length) return multiplied;
    }
}

console.log(solution(arr));

// node LV2/N개의최소공배수.js