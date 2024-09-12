const k = 10
const dungeons = [[9, 2], [10, 3], [7, 3], [5, 4], [1, 1]]

// 유저가 탐험할수 있는 최대 던전 수를 return

/** DFS 백트레킹 */
// 9, 12,14, 15, 17 실패

/** 시작점이 항상 요구 피로도가 가장 높은 지점이 아닐수도 있다.
 * 즉, 모든 노드를 시작점으로 두고 실행해보는 것이 좋을듯?
 */
function solution(k, dungeons) {

    /** 던전 인덱스맵 생성 */
    const indexMap = new Map();
    dungeons.forEach((d, i) => {
        indexMap.set(i, d);
    })

    // 방문 배열
    let visited = Array.from({ length : dungeons.length }, () => false);

    /** 간선 생성 */
    const edge = [];
    for(let p = 0; p < dungeons.length; p++){
        for(let q = 0; q < dungeons.length; q++){
            if( p!==q ) edge.push([p, q]);
        }
    }
    /** 트리 생성 */
    const tree = Array.from({ length : dungeons.length }, () => []);
    edge.forEach(([parent, child]) => {
        tree[parent].push(child);
    })
    

    /** DFS 함수 설정 */
    let max = 0;
    function dfs(pirodo, index, count){
        let nextNodes = [...tree[index]];
        count ++;
        // console.log(pirodo, index, count)

        /** 피로도 처리 */
        pirodo -= indexMap.get(index)[1];
        max = Math.max(max, count);

        // 현재 노드를 방문 처리
        visited[index] = true;

        for(let i = 0; i<nextNodes.length; i++){
            let nextNode = indexMap.get(nextNodes[i]);
            let [nextRequired, nextConsume] = nextNode;
            if(
                pirodo >= nextRequired && 
                pirodo - nextConsume >= 0 && 
                !visited[nextNodes[i]]
            ){
                dfs(pirodo, nextNodes[i], count);
            }
        }
        // 백트래킹: 현재 노드 방문 처리 취소
        visited[index] = false;
    }

    // dfs(k, initialIndex, 0);
    // /** 최초 진입 던전 설정 */
    // let initial = dungeons.sort((a, b) => b[0] - a[0])[0];
    // let mapArr = [...indexMap]
    // let initialIndex = mapArr.filter(v => JSON.stringify(v[1]) === JSON.stringify(initial))[0][0];

    // 던전 순회의 시작점을 모든 노드에서 순차 실행
    dungeons.forEach((d, i) => {
        dfs(k, i, 0);
    })
    console.log(max)

    return max;
}

solution(k, dungeons);

// node LV2/피로도.js