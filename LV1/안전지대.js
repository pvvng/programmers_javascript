// https://school.programmers.co.kr/learn/courses/30/lessons/120866
// 2차원 배열 board
// board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
const board = [
    [0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0], 
    [0, 0, 1, 1, 0], 
    [0, 0, 0, 0, 0]
]

// 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
// 안전한 지역의 칸 수를 return
// 13
function solution(board) {

    let safety = board.length * board.length;
    const boardMaxLength = board.length - 1;
    let pungs = []; 
    console.log(safety)

    // 어쩔수 없이 이중 for 쎄리야겠구먼

    for ([y, line] of board.entries()){
        for([x, dot] of line.entries()){
            if(dot === 1){
                pungs.push({x : x, y : y})
            }
        }
    }
    console.log(pungs)
    var answer = 0;
    return answer;
}

solution(board);

// node LV1/안전지대.js