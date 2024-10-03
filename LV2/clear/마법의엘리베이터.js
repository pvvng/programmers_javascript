const storey = 485
// 더한 결과가 0보다 작으면 엘리베이터는 움직이지 않습니다
// => 음수면 안된다 / 정확히 0을 만들어라

// 1, 3, 6, 7, 11 실패
// 1, 3, 12 실패
function solution(storey) {
    var answer = 0;
    let ss = storey.toString().split('').map(v => parseInt(v)).reverse();
    let ls = ss.reduce((acc, cul) => {
        // acc 현재 자리수
        // cul 다음 자리수
        if(acc > 5){
            cul ++;
            answer += 10-acc;
        }else if (acc<5){
            answer += acc;
        }else{
            if(cul >= 5){
                cul++;
                answer += 10-acc;
            }else {
                answer += acc;
            }
        }
        return cul;
    });
    if(ls === 10) {answer ++;}
    else if(ls > 5) {answer += 11 - ls;}
    else {answer += ls;}
    return answer;
}

solution(storey);

// node LV2/마법의엘리베이터.js