// https://school.programmers.co.kr/learn/courses/30/lessons/67256


/**
 * 알게된 점
 * 
 * 이동 거리와 같은 개념을 구할때는 좌표를 지정하고
 * 좌표간의 거리를 계산하는 것이 좋은 방법이다.
 * 
 * 그리고 이동 조건을 잘 살펴봐야한다.
 * 이 문제같이 상하좌우로만 이동이 가능한 경우에는 
 * 
 * 절댓값(기준점 좌표[0] + 기준점좌표[1] - (현재 키패드 좌표[1] + 현재 키패드 좌표[0])) <= 이딴식으로 풀면 오류가 생긴다.
 * 
 * 절댓값(기준점 좌표[0] - 현재 키패드 좌표[0]) + 절댓값(기준점좌표[1] - 현재 키패드 좌표[1]) 이렇게 이동 거리를 구해야 한다
 * 
 * 약간 Levenshtein 편집거리 같은 느낌도 있고? 아무튼 그렇다.
 */

// 순서대로 누를 번호가 담긴 배열 numbers
const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
// 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand
const hand = "right"
// 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return
result = "LRLLLRLLRRL";

// 키패드
// 1 2 3
// 4 5 6
// 7 8 9
// * 0 #

// 이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
// 맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 
// 엄지손가락을 사용하는 규칙은 다음과 같습니다.

// 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
// 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
// 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
// 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.

// 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.

function solution(numbers, hand) {
    // number로 이동할때 availabe한 값을 배열에 담기
    var answer = '';

    let nowLeft = '*';
    let nowRight = '#';

    // 미리 키패드 숫자 좌표를 매핑해놓기
    const defaultNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'];
    const defaultNumbersMap = new Map();
    for(number of defaultNumbers){
        // 1 ~ 3
        if(number >= 1 && number <= 3){
            defaultNumbersMap.set(number, [0, number - 1]);
        // 4 ~ 6
        }else if (number >= 4 && number <= 6){
            defaultNumbersMap.set(number, [1, number - 4]);
        // 7 ~ 9
        }else if (number >= 7 && number <= 9){
            defaultNumbersMap.set(number, [2, number - 7]);
        // * 0 #
        }else if (number === "*"){
            defaultNumbersMap.set(number, [3, 0]);
        }else if (number === 0){
            defaultNumbersMap.set(number, [3, 1]);
        }else if (number === "#"){
            defaultNumbersMap.set(number, [3, 2]);
        }
    }

    // defaultNumbersMap 이 아래와 같은 형식으로 나오는데, 
    // 1 => [ 0, 0 ],
    // 2 => [ 0, 1 ],
    // 3 => [ 0, 2 ],
    // levenshtein거리 계산할 때처럼 기준이 되는 거리가 되기위에 움직여야 하는 최소 거리를 구하면 될듯?
    /**** ㄴ이새끼가 정답이었음 ***/

    // 예를 들어 키패드 1 (0,0) 에서 키패드 5 (1,1) 로 이동할 때는 x축으로 +1칸, y축으로 +1 칸 총 2칸 이동
    // 키패드 6 (1,2) 에서 키패드 5 (1,1) 로 이동할 때는 y축으로 -1 칸 총 1칸 이동

    // 기준점 좌표[0] - 현재 키패드 좌표[0] + 기준점좌표[1] - 현재 키패드 좌표[1]의 절댓값 이 이동거리
    // 결론적으로는 기준점 좌표[0] + 기준점좌표[1] - (현재 키패드 좌표[1] + 현재 키패드 좌표[0]) 의 절댓값 이 이동거리

    /*** ㄴ 이새끼 틀림. 이거처럼 계산한 거리는 상하좌우로만 이동 가능하다는 조건을 무시하고 대각선 거리를 구하게 됨
    그래서 절댓값(기준점 좌표[0] - 현재 키패드 좌표[0]) + 절댓값(기준점좌표[1] - 현재 키패드 좌표[1]) 이렇게 이동 거리를 구해야 함 ***/

    const LRArray = [];

    for([index, click] of numbers.entries()){
        // 1, 4, 7을 클릭한 경우
        if (click === 1 || click === 4 || click === 7){
            LRArray.push('L');
            nowLeft = click;
        // 3, 6, 9을 클릭한 경우
        }else if (click === 3 || click === 6 || click === 9){
            LRArray.push('R');
            nowRight = click;
        // 2, 5, 8, 0 을 클릭한 경우
        }else{
            /**
             * GPT 선생님의 한마디
             * 
             * 김 : 선생님 2, 5, 8, 0 일때 거리를 어떻게 구할지 모르겠어요.
             * 챗 : ㅇㅋ
             * 
             * 거리 계산 -> 거리 비교 -> 거리 동일 시 선택
             * 로직을 거치면 됨
             * 
             * 거리 계산은 다음을 통해 가능함
             * 
             * 현재 왼손 엄지손가락과 오른손 엄지손가락의 위치를 좌표로 나타내고, 
             * 목표 숫자의 위치를 좌표로 나타내세요.
             * 
             * 좌표를 사용하여 맨해튼 거리를 계산하세요.
             * 맨해튼 거리는 두 좌표 (x1, y1)와 (x2, y2) 간의 거리로, 
             * |x1 - x2| + |y1 - y2|로 구할 수 있습니다.
             * 
             * 아하! 키패드의 좌표를 구해서 하면 되겠구나!
             */

            // 현재 왼손이 위치한 키패드
            const nowLeftLocation = defaultNumbersMap.get(nowLeft);
            // 현재 오른손이 위치한 키패드
            const nowRightLocation = defaultNumbersMap.get(nowRight);
            // 기준점이 되는 키패드 위치
            const clickLocation = defaultNumbersMap.get(click);

            // 이동 거리 저장
            let leftMovingDistance = 0;
            let rightMovingDistance = 0;

            if(JSON.stringify(nowLeftLocation) !== JSON.stringify(clickLocation)){
                leftMovingDistance = Math.abs(clickLocation[0] - nowLeftLocation[0]) + Math.abs(clickLocation[1] - nowLeftLocation[1]);
            }
            if(JSON.stringify(nowRightLocation) !== JSON.stringify(clickLocation)){
                rightMovingDistance = Math.abs(clickLocation[0] - nowRightLocation[0]) + Math.abs(clickLocation[1] - nowRightLocation[1]);                
            }

            if(leftMovingDistance > rightMovingDistance){
                LRArray.push('R');
                nowRight = click;
            }else if (leftMovingDistance < rightMovingDistance){
                LRArray.push('L');
                nowLeft = click;
            }else if (leftMovingDistance === rightMovingDistance){
                if(hand === 'right'){
                    LRArray.push('R');
                    nowRight = click;
                }else{
                    LRArray.push('L');
                    nowLeft = click; 
                }
            }
        }

    }

    answer = LRArray.join('');

    return answer;
}

solution(numbers, hand)

// node LV1/키패드누르기.js