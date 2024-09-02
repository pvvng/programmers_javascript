// 성공적으로 수행할 수 있으면 1을, 아닐 경우 0을 리턴
const s = 'baabaa';
/** 1트 )정확성 테스트 3~ 시간초과 */
/** 큐 스택으로 방식 변경해서 풀기 */
/** 2트 ) 효율성 테스트 전부 시간초과  */
function solution(s){
    let stack = s.split('')
    let queue = [];
    /** 
     * shift 의 시간 복잡도는 O(n), pop의 시간 복잡도는 O(1) 
     * 실제로 shift는 하지말고 index로 조절하기
    */
    let index = 0
    while (index !== stack.length){
        if(queue[queue.length - 1] === stack[index]){
            queue.pop();
        }else{
            let shiftElement = stack[index];
            queue.push(shiftElement);
        }
        index ++;
    }
    return queue.length !== 0 ? 0 : 1
}

solution(s);

// node LV2/짝지어제거하기.js