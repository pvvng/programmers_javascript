const x = -4
const n = 2

function solution(x, n) {
    return new Array(n).fill(0).map((v, i) => v += x * (i+1));
}

solution(x, n);

// node LV1/x만큼간격이있는n개의숫자.js