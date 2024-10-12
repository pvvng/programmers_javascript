const n = 123

function solution(n){
    return n.toString().split('').map(v => parseInt(v)).reduce((acc, cul) => acc + cul);
}

solution(n);

// node LV1/자릿수더하기.js