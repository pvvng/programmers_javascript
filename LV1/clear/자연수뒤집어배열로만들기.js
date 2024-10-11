const n = 12345;

function solution(n) {
    return n.toString().split('').reverse().map(v => parseInt(v));
}

solution(n);

// node LV1/자연수뒤집어배열로만들기.js