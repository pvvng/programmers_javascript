const x1 = true;
const x2 = false;
const x3 = false;
const x4 = false;

function solution(x1, x2, x3, x4) {
    return (x1 || x2) && (x3 || x4);
}

solution(x1, x2, x3, x4);

// node LV0/간단한논리연산.js