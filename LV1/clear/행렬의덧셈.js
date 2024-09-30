const arr1 = [[1],[2]]
const arr2 = [[3],[4]]

function solution(arr1, arr2) {
    return arr1.map((a1, i) => {
        let a = [];
        a1.forEach((_, j) => {
            a.push(arr1[i][j] + arr2[i][j]);
        })
        return a;
    })
}

console.log(solution(arr1, arr2));

// node LV1/행렬의덧셈.js