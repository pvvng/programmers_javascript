const n = 3
// n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수
// return 5

// 9 10 12 
function solution(n) {
    let fArr = [0, 1];
    for(let i = 2; i <= n; i++){
        fArr.push((fArr[i-1] % 1234567) + (fArr[i-2] % 1234567));
    }
    /** return 값이 1234567 이상일 수도 있으니 나머지 구해서 리턴 */
    return fArr[n] % 1234567 ;
}

solution(n);

// node LV2/피보나치수.js