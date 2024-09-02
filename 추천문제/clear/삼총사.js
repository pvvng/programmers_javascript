// 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사
const number = [-1, 1, -1, 1]
// 학생들 중 삼총사를 만들 수 있는 방법의 수를 return

function solution(number) {
    var answer = 0;
    for (let i = 0; i < number.length; i++){
        for(let p = i+1; p < number.length; p++){
            for(let q =p+1; q < number.length; q++){
                if(number[i] + number[p] + number[q] === 0) answer ++;
            }
        }
    }
    return answer;
}

solution(number);

// node 추천문제/삼총사.js