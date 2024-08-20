/**알게된점 
* str.charCodeAt() => 문자를 아스키 넘버로 변경
* String.fromCharCode(num) => 숫자를 아스키 부호로 변경
* for 반복문 초기화할때 i - 1 값으로 초기화해야 i가 1부터 시작하지 않고 0부터 시작한다.
*/

// 게임 화면의 격자의 상태가 담긴 2차원 배열 board
const board = [[1, 0, 0, 0, 0], [2, 0, 0, 0, 0], [2, 0, 0, 0, 0], [1, 0, 0, 0, 0], [3, 0, 0, 0, 0]]
// 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves
const moves = [1, 1, 1, 1]
// 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return
const result =  4

// 1, 2번 실패
function solution(board, moves) {
    let stack = [];

    var answer = 0;
    // board의 세로열만 추출

    const gameBoardMap = new Map();

    board.forEach((line, i1) => {
        // i1은 세로열
        line.forEach((dot, i2) => {
            // i2는 가로열
            // 인형이 있을 경우에
            if(dot !== 0){
                gameBoardMap.get(i2 + 1)?
                gameBoardMap.set(i2 + 1, [...gameBoardMap.get(i2 + 1), dot]):
                gameBoardMap.set(i2 + 1, [dot]);
            }
        } )
    });

    // moves 동작
    moves.forEach(m => {
        let nowQueue = gameBoardMap.get(m);
        // 인형 저장하고 기존 배열에서 지우기
        let stackPlus = undefined;
        /** nowQueue가 정의되었을때만 실행 */
        if(nowQueue){
            stackPlus = nowQueue[0];
            nowQueue.shift();
            // 첫번째 인형 삭제된 배열 재저장
            gameBoardMap.set(m, [...nowQueue]);
        }

        // 해당 열에 가져올 인형이 있을때 (undfeind가 아닐때)만 stack에 push
        stackPlus && stack.push(stackPlus);
    })

    /** length 가 달라질 수 있기 때문에
     * stack.length - 2에서 
     * stack.length - 1 로 변경
     */
    for(let i = 0; i < stack.length - 1; i++){
        const pre = stack[i];
        const next = stack[i + 1];
        if(pre === next){
            // 겹치는 부분 잘라내기
            const preStack = stack.slice(0, i);
            const nextStack = stack.slice(i + 2, stack.length);
            stack = [...preStack, ...nextStack];
            // 반복문 초기화
            /** 
             * 기존에는 0으로 초기화했으나, 
             * 0으로 초기화하면 1부터 시작하는 문제가 생긴다. 
             * */
            i = -1;
            // 터뜨린 인형 2개 추가
            answer = answer + 2;
        }
    }

    console.log(answer);

    return answer;
}

solution(board, moves);

// node LV1/크레인인형뽑기게임.js