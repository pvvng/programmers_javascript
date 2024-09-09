const maps = ["X591X", "11X5X", "X231X", "1XXX1"]

/** 
 * GPT 선생님의 한마디
 * 
 * 이 문제는 그래프 탐색 문제로 접근할 수 있습니다.
 * 1. 상, 하, 좌, 우로 연결된 숫자들(무인도)을 탐색해야 하므로 
 * BFS 또는 DFS를 사용합니다
 * 
 * 2. 한 번 방문한 무인도는 다시 방문하지 않도록 방문 체크 배열을 사용합니다.
 * 
 * 3. 하나의 섬을 탐색할 때 얻은 식량(숫자 합)을 따로 저장합니다.
 */

/** 
 * 2트
 * 14, 16, 18, 19 런타임 에러
 * 21, 23 실패
 * 
 * 1. 이어지지 않은 좌표가 합산되는 문제
 * 2. 런타임 에러
  */

 /**
  * 3트 
  * 16, 18, 19 런타임 에러
  */
function solution(maps) {
    var answer = [];

    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];

    /** 최대 길이 */
    const [maxX, maxY] = [maps.length, maps[0].length];
    /** 방문 배열 */
    const visited = maps.map(v => new Array(v.length).fill(false));

    function dfs(x, y){
        let foodSum = parseInt(maps[x][y]);
        // NaN 처리 (X일때는 얼리리턴) <이어지지 않은 좌표 합산 문제 해결>
        if(Number.isNaN(foodSum)) return 0;
        // 방문 처리
        visited[x][y] = true;

        // let neighbor = [[x-1, y], [x, y-1], [x+1, y], [x, y+1]];
        /**
         * for...of vs 일반 for 성능 차이
         * 
         * 성능 차이는 거의 없지만, 
         * 배열을 다룰 때는 인덱스 기반 for가 미세하게 더 빠를 수 있습니다. 
         * 이유는 for...of가 내부적으로 
         * iterator 프로토콜을 사용하기 때문에 추가적인 작업이 있기 때문입니다.
         */
        for(let i = 0; i<4; i++){
            const nx = x + dx[i];
            const ny = y + dy[i];
            /** neighbor가 바다가 아닌 섬일때 */
            if(nx >= 0 && nx < maxX && ny >= 0 && ny < maxY){
                // 방문하지 않았고, 숫자 (섬) 일때 dfs 실행
                if(maps[nx][ny] !== 'X' && !visited[nx][ny]){
                    /** 연결된 섬 탐색 */
                    foodSum += dfs(nx, ny);
                }
            }
        }
        return foodSum;
    }

    // 전체 지도를 순회하면서 각 좌표를 탐색 
    for (let i = 0; i < maxX; i++) {
        for (let j = 0; j < maxY; j++) {
            // 방문하지 않은 섬에서 dfs 실행
            if(!visited[i][j] && maps[i][j] !== 'X'){
                const islandFood = dfs(i,j);
                /** NaN으로 인해 반환되는 0 처리 */
                if(islandFood !== 0) answer.push(islandFood);
            };
        }
    }

    return answer.length > 0 ? answer.sort((a,b) => a-b) : [-1];
}

console.log(solution(maps));

// node 추천문제/무인도여행.js