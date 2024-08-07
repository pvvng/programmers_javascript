const X = "100"
const Y = "123450"

// X = 3403이고 Y = 13203이라면, 
// X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 
// 가장 큰 정수인 330

// X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1
// X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0
// result -1

// y의 요소를 count해서 x의 요소와 겹칠때마다 하나씩 제거하는 형식으로 가면 될것같음
function solution(X, Y) {

    var answer = '';

    // x, y를 배열로 split 한다
    const xToArray = X.split('');
    const yToArray = Y.split('');

    // y 배열의 요소를 마킹할 map
    const yToMap = new Map();

    // y요소를 마킹 
    for (yItem of yToArray){
        // map에 존재하지 않는 요소는 0, 존재하면 원래 있던거에서 1 증가
        yToMap.set(
            yItem, 
            yToMap.get(yItem) !== undefined?
            parseInt(yToMap.get(yItem)) + 1:
            1
        );
    }

    // 중복되는 요소를 담는 어레이
    let sameThingArray = [];

    // x 배열을 순회하면서 중복되는 요소 검사
    for ([xIndex, xItem] of xToArray.entries()){
        // x 요소가 y map에 마킹되어 있을때
        if(yToMap.get(xItem) >= 1){
            // 하나 줄이고
            yToMap.set(xItem, yToMap.get(xItem) - 1);
            // 중복 요소 어레이에 담기
            sameThingArray.push(xItem);
        }
    }

    // 중복 요소 어레이가 비었다면 early return
    if(sameThingArray.length === 0){
        // console.log(-1)
        return "-1";
    }
    // 중복 요소 어레이를 내림차순 정렬하고 
    // join하면 가장 큰 정수 값을 알 수 있지 않을까?
    sameThingArray = sameThingArray.sort((a, b) => b - a);

    /**
     * GPT 선생님의 한마디
     * join과 replaceAll을 사용한 부분을 간소화할 수 있습니다.
     */
    // answer = sameThingArray.join(',').replaceAll(',','');
    answer = sameThingArray.join('');

    // 만약 answer가 0, 00, 000 등 0으로만 구성된 단어라면?
    const Test0 = (answer.replaceAll('0',''));
    if(Test0 === ''){
        // 0하나로 설정
        // console.log(0)
        return "0";
    }

    // console.log(answer)
    return answer;
}

solution(X,Y);

// node LV1/숫자짝꿍.js