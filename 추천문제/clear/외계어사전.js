/**
 * 알게된점
 * 
 * some() 메서드는 배열 안의 
 * 어떤 요소라도 주어진 판별 함수를 적어도 하나라도 통과하는지 테스트합니다
 * 
 * Array.toString() 시 배열이 벗겨지고 요소의 string만 남는다.
 * 
 * sort, toString을 통해 배열을 순서대로 정의하고, string화 시킬수 있다.
 * 문제에서는 이를 활용하여 dic의 요소에 spell이 포함되는지 확인한다.
 */

// 알파벳이 담긴 배열 spell
const spell = ["z", "d", "x"]

// 외계어 사전 dic
const dic = ["def", "dww", "dzx", "loveaw"]

// spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 
// 존재하지 않는다면 2를 return

function solution(spell, dic) {
    var answer = 0;

    // dic 배열의 요소 중 하나라도 아래 조건을 만족하면 true를 반환한다
    dic.some(word => 
        // dic 배열의 요소 하나하나 sort, string화 시킨다.
        // sort를 사용하는 이유는 
        // 알파벳 순으로 정렬해서 includes를 사용하게 하기 위해서
        // ex. 
        // [a,b,c] =(sort/toString)> a,b,c
        // [b,a,c,d] =(sort/toString)> a,b,c,d
        // includes가 가능해진다.
        [...word].sort().toString()
        // spell 배열을 sort하고 stirng화 시킨 문자열이 
        // 앞선 문자열에 포함되는지 확인한다.
        .includes(spell.sort().toString())
    ) ?
    answer = 1 : 
    answer = 2

    return answer;
}

solution(spell, dic)

// node 추천문제/외계어사전.js