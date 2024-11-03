const n =3

function solution(n) {
    return Number.isInteger(Math.sqrt(n))?
    (Math.sqrt(n) + 1) ** 2 : -1
}

console.log(solution(n));

// node LV1/re정수제곱근판별.js