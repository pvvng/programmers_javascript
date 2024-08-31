// 문자열 s의 길이가 4 혹은 6 && 숫자로만 구성돼있는지 확인해주는 함수
const s = "12123a"

// 3, 11, 21, 24 25, 27 실패
function solution(s) {
    let isNaN = true;
    s.split('').forEach(e => {
        if(Number.isNaN(parseInt(e))) isNaN = false;
    })
    return (s.length === 4 || s.length === 6) && isNaN;
}

solution(s);

// node 추천문제/문자열다루기기본.js