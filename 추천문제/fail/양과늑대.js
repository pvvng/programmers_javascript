const info = [0,0,1,1,1,0,1,0,1,0,1,1];
const edges = [[0,1],[1,2],[1,4],[0,8],[8,7],[9,10],[9,11],[4,3],[6,5],[4,6],[8,9]]

// BFS?
/**
 * 백트래킹이 필요하기 때문에 DFS가 더 유리함
 */
function solution(info, edges) {
    let answer = 0;

    /**
     * 트리 구조를 만들기 위한 연결 정보
     * 
     * new Array를 사용하지 않고 from을 사용하는 이유
     * 
     * new Array()는 비어있는 배열을 생성하며, 그 후에 fill을 사용하여 각 요소를 초기화
     * Array.from()은 즉시 초기화가 가능하며, 콜백을 통해 복잡한 초기화도 가능
     */
    const tree = Array.from({ length: info.length }, () => []);
    // 간선 추가
    edges.forEach(([parent, child]) => {
        tree[parent].push(child);
    });

    function dfs(node, mae, woo, possibleNodes) {
        // 최대 양의 수 갱신
        answer = Math.max(answer, mae); 

        // 가능한 경로들을 복사해서 백트래킹 할 수 있도록 관리
        // possibleNodes에 들어오는 값은 이전 노드의 경로와 같음
        // 즉 백트레킹이 가능해진다.
        const nextNodes = [...possibleNodes];

        // 현재 노드에 연결된 자식 노드들을 탐색 경로에 추가
        nextNodes.push(...tree[node]);

        // 가능한 모든 다음 노드를 탐색
        for (let i = 0; i < nextNodes.length; i++) {
            const nextNode = nextNodes[i];
            // 이미 탐색한 노드는 제외
            const newNodes = nextNodes.filter(n => n !== nextNode); 

            let tempMae = mae;
            let tempWoo = woo;

            if (info[nextNode] === 0) tempMae += 1;  // 양
            else tempWoo += 1;  // 늑대

            // 양이 늑대보다 많을 때만 탐색 계속 (= 이전 상태 복구)
            if (tempMae > tempWoo) {
                // newNodes 값은 현재 자신의 경로를 제외한 이동 가능 노드
                dfs(nextNode, tempMae, tempWoo, newNodes);
            }
        }
    }

    dfs(0, 1, 0, []);  // 초기 상태로 DFS 시작

    return answer;
}

solution(info, edges);

// node 추천문제/양과늑대.js