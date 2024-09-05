// I 숫자	큐에 주어진 숫자를 삽입합니다.
// D 1	큐에서 최댓값을 삭제합니다.
// D -1	큐에서 최솟값을 삭제합니다.
// 모든 연산을 처리한 후 큐가 비어있으면 [0,0] 
// 비어있지 않으면 [최댓값, 최솟값]을 return
const operations = ["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"]
function solution(operations) {
    var answer = [];
    operations.forEach(o => {
        const [command, num] = o.split(' ');
        if(command === 'I') answer.push(num);
        else if(command === 'D'){
            if(num === '-1') answer.sort((a,b) => b-a).pop();
            else if(num === '1') answer.sort((a,b) => a-b).pop();
        }
    })
    return answer.length > 0 ? 
    [Math.max(...answer), Math.min(...answer)] : [0,0];
}

solution(operations);

// node 추천문제/이중우선순위큐.js