const arr = [5,5]
function solution(arr) {
    return arr.reduce((acc, cul) => acc + cul) / arr.length;
}

console.log(solution(arr));

// node LV1/평균구하기.js