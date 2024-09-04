const k = 1
const tangerine = [1]
// 서로 다른 종류의 최솟값을 return 

// 12 ~ 14, 16 ~ 19 실패
function solution(k, tangerine) {
    var answer = 0;
    // 가장 많은 값을 기록해두고, 해당 값 +-1 +-2를 해서 배열 만들기
    let tangerineMap = new Map();
    tangerine.forEach(t => {
        tangerineMap.set(t, (tangerineMap.get(t) || 0) + 1);
    })

    let sortedMap = [...tangerineMap.values()].sort((a,b) => b-a);
    for(let [index, sm] of sortedMap.entries()){
        /** sortedMap의 길이가 1인 경우에는 
         * 반복이 1회로 종료되어 return 이 되지 않는 문제가 존재하였음.
         * answer의 값을 조건문보다 먼저 선언하여 문제 해결
         *  */
        answer += sm;
        /** 
         * answer의 갯수가 k보다 커져도 괜찮음.
         * 정확한 개수를 구하는게 아니라 종류의 갯수를 구하는 거니까 상관 x
         */
        if(answer >= k){return index + 1;}
    }
}

solution(k, tangerine);

// node LV2/귤고르기.js