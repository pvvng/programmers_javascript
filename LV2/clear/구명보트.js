const people = [70, 80, 50]
const limit = 100
// 작아서 한 번에 최대 2명씩 밖에 탈 수 없고
// 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 
function solution(people, limit) {
    var answer = 0;

    // 내림차순으로 정렬
    people.sort((a, b) => b - a);
    /** shift의 시간 복잡도를 고려하여 index를 변화하는 방향으로 변경 */
    let shiftIndex = 0;
    let popIndex = people.length - 1;

    while(shiftIndex <= popIndex){
        let first = people[shiftIndex];
        let last = people[popIndex];
        if(first + last <= limit) popIndex --;
        shiftIndex ++;
        answer ++;
    }
    return answer;
}

solution(people, limit)

// node LV2/구명보트.js