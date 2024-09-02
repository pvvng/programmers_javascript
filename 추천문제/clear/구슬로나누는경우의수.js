const balls = 30
const share = 15

// 5 6 7 28 30 31 33 35
// 30 33
function factorial(x){
    let fac = 1;
    for (let i = x; i > 1; i--){
        fac *= i;
    }
    return fac;
}
/** 부동 소수점 관련 문제 */
// https://joooing.tistory.com/entry/Javascript-%EC%86%8C%EC%88%98%EC%A0%90floating-point-%EA%B3%84%EC%82%B0-%EC%98%A4%EB%A5%98
function solution(balls, share) {
    return Math.round(
        factorial(balls) / (factorial(balls - share) * factorial(share)
    ));
}

// function solution(balls, share){
    
// }

solution(balls, share);

// node 추천문제/구슬로나누는경우의수.js