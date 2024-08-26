/**
 * 알게된점
 * **유클리드 호제법**
 * gcd(a,b) = gcd(b,r)
 * 1. a를 b로 나누고 나머지 r을 구합니다.
 * 2. 만약 r=0이면, b가 최대공약수입니다.
 * 3. 그렇지 않다면, a를 b로, b를 r로 갱신한 후, 1단계로 돌아갑니다.
 * 
 * for 문이 단순 반복 뿐 아니라 두번째 인자에 
 * falsy 한 값을 할당해서 루프를 종료시킬 수 있다.
 */
// 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환
const result  = [3, 12]

// 11, 15 실패
// function solution(n, m) {
//     var answer = [1, 1];
//     // 1 2 3 5 7(소수)로만 나누는 것은 11, 13 등 위쪽 소수의 경우를 포함하지 못한다.
//     const divArr = [2, 3, 5, 7];
//     let [divedN, divedM] = [n, m]
//     for(let i = 0; i < divArr.length; i++){
//         let [da, nowIndex] = [divArr[i], i];
//         let checkInteger = Number.isInteger(divedN / da) && Number.isInteger(divedM / da);

//         if(checkInteger){
//             [divedN, divedM] = [divedN / da, divedM / da];
//             answer[0] *= da; 
//             if(da !== 1) { i = nowIndex - 1 };
//         }else{ 
//             answer[1] = answer[0] * divedN * divedM
//         }
//     }
//     console.log(answer)
//     return answer;
// }


// solution(n, m);

// 3, 12의 
const n = 2
const m = 5
/**
 * 유클리드 호제법 사용하는 경우
 * 최대 공약수 구하기
 */
function solution(n,m){
    // 필요한건 나머지, 몫
    let copyN = n;
    let copyM = m;
    const multiplied = n * m;
    let rest = n % m;
    while(rest !== 0){
        copyN = copyM;
        copyM = rest;
        rest = copyN % copyM
    }
    console.log([copyM, multiplied /copyM])
    return [copyM, multiplied /copyM]
}

function gcdlcm(a, b) {
    var r;
    for(var ab= a*b;r = a % b;a = b, b = r){
        /**
         * ab는 두 자연수 인자의 곱 (전역변수)
         * r은 a, b의 나머지
         * 반복문 끝에서 a = b로 b=r로 변경
         * 
         * 두번째 인자가 0(false) 가 될때에는 세번째 인자를 실행하지 않고
         * 루프 탈출
         * 
         * => 유클리드 호제법
         * gcd(a, b)=gcd(b, r)
         */
        console.log(ab, a, b, r)
    }
    return [b, ab/b];
}

console.log(gcdlcm(n,m))

// node 추천문제/최대공약수와최소공배수.js