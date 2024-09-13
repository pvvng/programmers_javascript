// 예시 사용
const arr1 = [[1, 4], [3, 2], [4, 1]];
const arr2 = [[3, 3], [3, 3]];

function solution(arr1, arr2) {
    const result = [];
    // arr1의 행(row) 순회
    for (let i = 0; i < arr1.length; i++) {
        const row = [];
        // arr2의 열(column) 순회
        for (let j = 0; j < arr2[0].length; j++) {
            let sum = 0;
            // arr1의 열과 arr2의 행을 곱해서 더함
            for (let k = 0; k < arr2.length; k++) {
                sum += arr1[i][k] * arr2[k][j];
            }
            row.push(sum);
        }
      
        result.push(row);
    }
  
    return result;
}
  
  
console.log(solution(arr1, arr2));
  