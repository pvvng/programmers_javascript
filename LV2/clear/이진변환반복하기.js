/**
 * 이진 변환
 * 
 * 1. x의 모든 0을 제거합니다.
 * 2. x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
 * s가 "1"이 될 때까지 계속
 */

// 이진 변환의 횟수와 
// 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 

const s = 	"110010101001"
// result [3,8]

function solution(s) {
    let zeroCounter = 0;
    let convertCounter = 0;

    while(s !== '1'){
        s.split('').forEach(str => {
            if(!parseInt(str)) zeroCounter ++;
        })

        s = s.replaceAll('0', '').length.toString(2);
        convertCounter ++;
    }

    return [convertCounter, zeroCounter];
}

solution(s);

// node LV2/이진변환반복하기.js
