/**
 * 두고보자
 */

// https://school.programmers.co.kr/learn/courses/30/lessons/120866
// 2차원 배열 board
// board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
const board = [
    [1, 1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1]
]
// 12칸
// 4 -2 + 1 * 4- 1 + 1 

// 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
// 안전한 지역의 칸 수를 return
// 13

/** 이 방식은 지뢰가 붙어있지 않고, 산재해 있을때 제대로 된 값을 구할 수 없다. */
function solution1(board) {  

    let totalCount = (board.length) * (board.length);
    let maxLength = board.length - 1
    let copyBoard = [...board];
    let dangerous = [];
    var answer = 0;

    for([y, line] of copyBoard.entries()){
        for([x, dot] of line.entries()){
            if(dot === 1){
                let temp = [{x : x - 1, y : y - 1, sum : x + y -2}, {x : x + 1, y : y + 1, sum : x + y + 2}]
                dangerous.push(...temp);
            }
        }
    }
    let minDot = {};
    let maxDot = {};

    dangerous = dangerous.sort((a, b) => a.sum - b.sum);

    dangerous = dangerous.filter(item => item.x >= 0 && item.y >= 0 && item.sum >= 0)
    dangerous = dangerous.filter(item => item.x <= maxLength && item.y <= maxLength)

    minDot = dangerous[0];
    maxDot = dangerous[dangerous.length - 1];
    answer = totalCount - ((maxDot.y - minDot.y + 1) * (maxDot.x - minDot.x + 1));
    return answer;
}

solution1(board);

function solution(board) {
    var answer = 0;

    let totalCount = (board.length) * (board.length);
    let maxLength = board.length - 1;
    let copyBoard = [...board];
    const dangerousMap = new Map();

    for([y, line] of copyBoard.entries()){
        for([x, dot] of line.entries()){
            if(dot === 1){

            }
        }
    }

    console.log

    return answer;
}

solution(board);

// node LV1/안전지대.js