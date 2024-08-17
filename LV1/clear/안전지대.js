/**
 * 알게된점
 * 딱히 없음
 */

const board =[[0, 0, 0], [1, 0, 0], [0, 0, 0]]
// 6,7 오답
function solution(board) {
    var answer = 0;
    let boardTotalSize = board.length * board.length;
    const boardMax = board.length - 1;

    let dangerousLoc = [];

    board.forEach((line, index1) => {
        line.forEach((dot, index2) => {
            if(dot === 1){
                let temp = index1 - 1;
                // 상화좌우 위험지역 설정하기
                for (let i = temp; i <= (temp + 2); i++){
                    /** 11, 1의 좌표와 1, 11의 좌표가 동일한 값으로 간주되어 중복 제거된다
                     * 이를 방지하기 위해 / 기호를 통해 구분한다.
                     */
                    dangerousLoc.push(i.toString() + '/' + (index2 - 1).toString());
                    dangerousLoc.push(i.toString() + '/' + index2.toString());
                    dangerousLoc.push(i.toString() + '/' + (index2 + 1).toString());
                }
            }
        })
    })

    // 중복제거
    dangerousLoc = [...new Set(dangerousLoc)]

    // 비정상적인 위험지역(음수, 최대 범위 벗어나는 경우) 제거
    let deletedDangerousLoc = [];
    dangerousLoc.forEach(dl => {
        if(!dl.includes('-') && !dl.includes((boardMax + 1).toString())){
            deletedDangerousLoc.push(dl);
        }
    })

    answer = boardTotalSize - deletedDangerousLoc.length;

    console.log(answer)
    return answer;
}

solution(board)

// node LV1/안전지대.js