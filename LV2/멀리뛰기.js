const n = 50
// 한번에 1칸, 또는 2칸
// 끝에 도달하는 방법에 1234567를 나눈 나머지를 리턴하는 함수

// n이 홀수일때 자연수 x는 최대 2의 개수 
// x = (n - 1) / 2;
// n이 짝수일때 자연수 x는 최대 2의 개수 
// x = n / 2;


// 전체 공의 수! / (1의 갯수! * 2의 갯수!)
function solution(n) {
    var answer = 0;
    let maxTwo = (n % 2 === 0) ? n / 2 : (n - 1) / 2;
    for (let i = 0; i <= maxTwo; i++){
        // i는 2의 갯수
        // n - 2 * i는 1의 갯수
        console.log(i, n - 2 * i)
    }
    return answer;
}

solution(n);

// node LV2/멀리뛰기.js