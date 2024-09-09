const maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]
/** 
 * 1트
 * 2, 3, 6, 8 ~10, 11, 13, 14, 17, 18 실패
 * 1~4 시간초과
 */
function solution(maps) {
    // queue 기본 세팅
    const queue = [{x : 0, y : 0, dist : 1}];
    const [maxWidth, maxHeight] = [maps.length, maps[0].length];
    const nexus = [maxWidth-1, maxHeight-1];

    while(queue.length > 0){
        const {x, y, dist} = queue.shift();

        // 도착시 완료처리
        if(x === nexus[0] && y === nexus[1]){
            return dist;
        }

        /** 메모리 낭비를 줄이기 위해 기존 map 변형 */
        if(maps[x-1] && maps[x-1][y] === 1){
            queue.push({x : x-1, y : y, dist : dist+1});
            maps[x-1][y] = false;
        };
        if(maps[x] && maps[x][y-1] === 1){
            queue.push({x : x, y : y-1, dist : dist+1});
            maps[x][y-1] = false;
        };
        if(maps[x+1] && maps[x+1][y] === 1){
            queue.push({x : x+1, y : y, dist : dist+1});
            maps[x+1][y] = false;
        };
        if(maps[x] && maps[x][y+1] === 1){
            queue.push({x : x, y : y+1, dist : dist+1});
            maps[x][y+1] = false;
        };
    }
    return -1;
}

console.log(solution(maps));