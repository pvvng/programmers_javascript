/**
 * 알게된 점
 * 
 * 0, ', null, undefined, NaN 모두 falsy한 값으로
 * 조건을 정확히 지정해주지 않으면 오류를 쌀 수도 있음!!!
 * 
 */

const arr = [4, 4, 4, 3, 3];
// 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거
// 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지

// return [1, 3, 0, 1]

function solution(arr){

    const returnArr = [];

    for(const [index, key] of arr.entries()){
        /** GPT아니고 Programmers AI 선생님의 일침
         * 
         * 이 조건문은 `returnArr`의 마지막 원소가 0 
         * 또는 아직 아무 것도 없을 때 (`undefined`)를 체크하는 것을 의도하신 것 같습니다.(어케 알았노;)
         * 
         * 그러나 JavaScript에서는 0, 빈 문자열(`''`), `null`, `undefined`, `NaN` 모두 `false`로 평가됩니다.
         * (아하!)
         * 
         */
        const nowReturnArrLastIndex = returnArr.length - 1;
        // last index에 아무 값도 없다. 즉 어레이가 빈 값일 때 push
        if(returnArr.length === 0 || returnArr[nowReturnArrLastIndex] !== key){
            returnArr.push(key)
        }
    }
    var answer = [...returnArr];
    console.log(answer)
    return answer;
}

solution(arr);

// node LV1/같은숫자는싫어.js