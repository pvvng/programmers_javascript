const arr1 = [[2, 3, 2], [4, 2, 4], [3, 1, 4]]
const arr2 = [[5, 4, 3], [2, 4, 1], [3, 1, 1]]
function solution(arr1, arr2) {
    var answer = [[]];
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr1.length; j++){
            // console.log(arr1[i][j], arr2[j][i])
            console.log([i,j], [j,i])
        }
    }
    return answer;
}

solution(arr1, arr2);

// node LV2/행렬의곱셈.js