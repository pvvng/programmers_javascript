// pop을 하면 배열의 첫 번째 원소가 추출되며, (js shift)
// insert를 하면 배열의 끝에 원소가 추가됩니다.
const queue1 = [1, 1]
const queue2 = [1, 5]

// 11, 22, 23, 24, 28 타임아웃
function solution(queue1, queue2) {
    // 종료조건 (큐 두개의 모든 요소가 한바퀴 도는데 컬리는 시간)
    let max = (queue1.length * 3) - 1;

    let oneSum = queue1.reduce((acc, cul) => acc + cul);
    let twoSum = queue2.reduce((acc, cul) => acc + cul);
    let count = 0;
    
    // 시간 복잡도 해결을 위해 shift 대신 index 사용
    let oneIndex = 0;
    let twoIndex = 0;

    while(1){
        // 종료조건
        if (count > max){
            break;
        }

        if(oneSum > twoSum){
            let shiftElement = queue1[oneIndex];
            queue2.push(shiftElement);
            oneIndex ++;
            oneSum -= shiftElement;
            twoSum += shiftElement;
            count++;
        }else if (oneSum < twoSum){
            let shiftElement = queue2[twoIndex];
            queue1.push(shiftElement);
            twoIndex ++;
            oneSum += shiftElement;
            twoSum -= shiftElement;
            count++;
        }else if (oneSum === twoSum){
            return count;
        }
    }
    return -1;
}

console.log(solution(queue1, queue2));

// node 추천문제/두큐합같게만들기.js