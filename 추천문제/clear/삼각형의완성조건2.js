// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.

// 삼각형의 두 변의 길이가 담긴 배열 sides
const sides = [3, 6]
// 나머지 한 변이 될 수 있는 정수의 개수를 return
const result = 5;

function solution(sides) {
    var answer = 0;

    // const biggerOne = Math.max(...sides);
    const smallerOne = Math.min(...sides);
    // let sum = biggerOne + smallerOne;
    // let differ = biggerOne - smallerOne;

    // =========================================
    // 배열에 주어진 두 변이 가장 긴 변이 아닐경우 
    // biggerOne <= x < biggerOne + smallerOne

    // 배열에 주어진 두 변 중 하나가 가장 긴 변일 경우
    // biggerOne-smallOne < x <= biggerOne

    // 결론적으로는 남은 한 변의 길이가 될 수 있는 값의 범위는 아래와 같음.
    // biggerOne-smallerOne < x < biggerOne + smallerOne
    // 이 경우, x의 가짓수를 구하려면?
    // biggerOne + smallerOne - (biggerOne-smallerOne) -1
    // =========================================
    // => 2 * smallerOne - 1 가 정답이 된다.

    answer = Math.min(...sides) * 2 - 1;

    return answer;
}

solution(sides);

// node 추천문제/삼각형의완성조건2.js