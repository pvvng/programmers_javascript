// str에 나타나는 숫자 중 최소값과 최대값을 찾아 
// 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution

const s = "1 2 3 4"

function solution(s) {
    let sToArr = []
    s.split(' ').forEach(str => {
        sToArr.push(parseInt(str));
    });
    return `${Math.min(...sToArr)} ${Math.max(...sToArr)}`;
}

solution(s);

// node LV2/최댓값과최솟값.js