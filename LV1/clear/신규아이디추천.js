/**
 * 알게된점
 * 
 * 조건이 빡빡하게 나열된 문제는 오히려 풀기 편하다. 
 * 근데 조건 제대로 안보고 빡빡하게 안짜면 실수할수도 있으니 조심하도록.
 */

// 카카오 아이디 규칙에 맞지 않는 아이디를 입력했을 때, 
// 입력된 아이디와 유사하면서 규칙에 맞는 아이디를 추천

// 카카오 아이디의 규칙
// 아이디의 길이는 3자 이상 15자 이하여야 합니다.
// 아이디는 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자만 사용할 수 있습니다.
// 단, 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용할 수 없습니다.


// 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
// 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
// 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
// 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.

// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
//      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

/** 오답에 대한 반례임 */
const new_id = "abcdefg.-abc"

const result =  "abcdefg.-abc"

// 4, 11, 14, 16, 17, 18, 19, 20, 21, 25 틀림
function solution(new_id) {
    var answer = '';
    // 1) new_id의 모든 대문자를 대응되는 소문자로 치환
    let lowerCaseArr = [];
    let lowerCaseStr = new_id.toLowerCase();
    for(const str of lowerCaseStr){
        lowerCaseArr.push(str);
    }

    // 2) 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
    let deletedStringArr = [];
    for([index, testString] of lowerCaseArr.entries()){
        // 2-1) 단어가 알파벳 소문자인지 검증
        if('a' <= testString && testString <= 'z'){
            deletedStringArr.push(testString);
        }
        // 2-2) 숫자인지 검증
        else if('0' <= testString && testString <= '9'){
            deletedStringArr.push(testString);
        }
        // 2-3) 빼기(-), 밑줄(_)인지 검증
        else if(testString === '-' || testString === '_'){
            deletedStringArr.push(testString);

        /** 기존에는 -, _, . 인 경우 모두에서 아래의 식을 진행하였음
         * 근데 그러면 안됨. 검사하는 str이 . 알때에만 아래 식을 진행해야함
         * (. 여러개 검증)
         */

        // 2-3) 마침표(.) 인지 검증
        }else if(testString === '.'){
            // 3) new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
            if(deletedStringArr[deletedStringArr.length-1] !== '.'){
                deletedStringArr.push(testString);
                console.log(testString, deletedStringArr)
            }
        }

    }

    // 4) new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거
    if(deletedStringArr[0] === '.'){
        deletedStringArr = [...deletedStringArr.slice(1)];
    }
    if(deletedStringArr[deletedStringArr.length - 1] === '.'){
        deletedStringArr = [...deletedStringArr.slice(0, -1)];
    }

    // 5) new_id가 빈 문자열이라면, new_id에 "a"를 대입
    if(deletedStringArr.length === 0){
        deletedStringArr.push('a');
    }

    // 6) new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
    if(deletedStringArr.length >= 16){
        deletedStringArr = [...deletedStringArr.slice(0, 15)];
        // 6-1) 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거
        if(deletedStringArr[0] === '.'){
            deletedStringArr = [...deletedStringArr.slice(1)];
        }
        if(deletedStringArr[deletedStringArr.length - 1] === '.'){
            deletedStringArr = [...deletedStringArr.slice(0, -1)];
        }
    }
    // 7) new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙이기
    if(deletedStringArr.length <= 2){
        let addStr = deletedStringArr[deletedStringArr.length - 1];
        for (let i = deletedStringArr.length ; i < 3; i++){
            deletedStringArr.push(addStr);
        }
    }

    answer = deletedStringArr.join('');
    console.log(result === answer);
    console.log(result);
    console.log(answer);

    return answer;
}

solution(new_id);

// node LV1/신규아이디추천.js