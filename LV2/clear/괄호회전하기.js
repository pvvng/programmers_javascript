const s = "}}}"

function solution(s) {
    /** 정확한 괄호 배열 */
    const correct = ['{}', '[]', '()'];

    var answer = 0;
    let sToArr = s.split('');

    let index = 0;
    while(index !== s.length){
        let queue = [];
        /** 배열 회전 */
        sToArr.push(sToArr.shift());
        /** 닫힌 괄호로 시작하는 배열 거르기 */
        if(!['}', ']', ')'].includes(sToArr[0])){
            let stack = [...sToArr];
            let stackIndex = 0;
            /** stackIndex (유사 shift) 증가시키면서 queue 정리하기 */
            while(stackIndex !== stack.length){
                let shiftedElement = stack[stackIndex];
                /** 괄호 정확성 여부 검사 */
                let correctTest = correct.includes(
                    queue[queue.length - 1] + shiftedElement
                );
                /** 괄호가 정확하면 queue pop */
                if(correctTest) queue.pop();
                /** 괄호가 정확하지 않으면 queue에 shift 요소 삽입 */
                else{ queue.push(shiftedElement); }
                stackIndex ++;
            }
            /** queue가 비워져있다면 정확한 괄호라는 의미임 */
            if(queue.length === 0) answer ++;
        }
        index ++;
    }
    return answer;
}

solution(s);

// node LV2/괄호회전하기.js