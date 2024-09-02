const numbers = [4, 1, 2, 1];
const target = 4;

/** DFS (깊이 우선 탐색)
 * 1회차 완료하고 이전 인덱스로 회귀해서 분기를 나눈다.
 * 
 * 1. 경로 탐색 및 백트래킹이 필요한 경우 (미로찾기)
 * 2. 모든 경로를 다 탐색해야 하는 경우
 * 3. 트리나 그래프의 깊은 부분을 우선적으로 탐색해야 하는 경우
 * 4. 메모리 효율성
 * 
 * => 해결
 */
function DFSsolution(numbers, target) {
    var result = 0;
    function dfs(index, sum, state) {
        // console.log(index, sum, state)
        // 모든 숫자를 다 사용한 경우
        if (index === numbers.length) {
            // 현재 합이 목표값과 같은지 확인
            if (sum === target) {
                result++;
            }
            return;
        }

        // 현재 index의 숫자를 더하는 경우
        dfs(index + 1, sum + numbers[index], '+');
        // 현재 index의 숫자를 빼는 경우
        dfs(index + 1, sum - numbers[index], '-');
    }
    // 0번째 인덱스부터, 초기 합을 0으로 시작
    dfs(0,0,'i');

    return result;
}

// DFSsolution(numbers, target);

/** BFS (너비 우선 탐색)
 * 모든 경우의 수를 큐로 동시에 관리
 * 
 * 1.최단 경로 탐색이 필요한 경우 (그래프의 두 노드 간의 최단 경로 찾기)
 * 2. 최소 단계로 목표에 도달해야 하는 경
 * 3. 레벨 탐색이 필요한 경우
 * 4. 넓고 얕은 탐색이 필요한 경우
 * 
 * => 타임아웃
 */
function BFSsolution(numbers, target) {
    let queue = [{ index: 0, sum: 0 }];
    let count = 0;

    while (queue.length > 0) {
        const { index, sum } = queue.shift();

        // 모든 숫자를 다 사용한 경우
        if (index === numbers.length) {
            // 현재 합이 목표값과 같은지 확인
            if (sum === target) {
                count++;
            }
        } else {
            // 현재 index의 숫자를 더하는 경우
            queue.push({ index: index + 1, sum: sum + numbers[index] });
            // 현재 index의 숫자를 빼는 경우
            queue.push({ index: index + 1, sum: sum - numbers[index] });
        }
    }

    return count;
}

BFSsolution(numbers, target)

// node 추천문제/타겟넘버.js