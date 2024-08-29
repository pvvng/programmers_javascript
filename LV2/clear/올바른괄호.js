const s = 	"(()("
// const s = "(((())))"

/** 효율성 테스트 실패 */
function solution(s){
    let counter = 0
    /** 얼리 리턴을 위해 for of 로 변경 */
    for (let str of s){
        counter += str === '(' ? 1 : -1
        /** -1 이 등장한다는 것은 닫힘 괄호가 먼저 등장한다는 의미 */
        if(counter < 0){
            return false;
        }
    }
    /** counter가 0 (괄호 짝이 맞을때)만 true */
    return counter === 0;
}

solution(s);

// node LV2/올바른괄호.js