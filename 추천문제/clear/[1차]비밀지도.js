const n = 6
const arr1 = [46, 33, 33 ,22, 31, 50]
const arr2 = [27 ,56, 19, 14, 14, 10]

function solution(n, arr1, arr2) {
    var answer = [];
    for(let i = 0; i < n ; i++){
        let str1Arr = arr1[i].toString(2).padStart(n, '0').split('');
        let str2Arr = arr2[i].toString(2).padStart(n, '0').split('');
        let temp = '';
        for(let j = 0; j < n ; j++){
            let sign = parseInt(str1Arr[j]) + parseInt(str2Arr[j]);
            sign = sign >= 1 ? '#' : ' ';
            temp += sign;
        }
        answer.push(temp);
    }
    return answer;
}

solution(n, arr1, arr2)
// node 추천문제/[1차]비밀지도.js