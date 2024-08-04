/**
 * 알게된점
 * 
 * map을 조회할때는 has 메소드를 사용하자
 * 글자에 > = < 등 숫자 비교 등식 사용해도 된다
 */
// s, skip string
// 문자열 s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꿔줍니다.
// index만큼의 뒤의 알파벳이 z를 넘어갈 경우 다시 a로 돌아갑니다.
const s = "aukks";
// skip에 있는 알파벳은 제외하고 건너뜁니다.
const skip = "wbqd";
// index int
const index = 5;

// result "happy"

function solution(s, skip, index) {
    var answer = '';
    const copySToArray = s.split('');
    const copySkipToArray = skip.split('');
    let returnLetterArray = [];

    let mapSkipArray = new Map();

    copySkipToArray.forEach(ckt => {
        mapSkipArray.set(ckt, true);
    })

    copySToArray.forEach(cta => {
        let copyIndex = index;
        let counter = 1
        let finalLetter = [];
        while(counter <= copyIndex){
            let transformToAscii = ((cta.charCodeAt(0)) + counter);
            if(transformToAscii > 122){
                // z 넘어가면 a기준으로 변경
                // index로 매우 큰 값이 들어오면 문제 생길수도 있으니 나머지 연산자 처리해주기
                transformToAscii = -26 + transformToAscii % 122 ;
                // console.log(transformToAscii, transformToAscii % (122))
            }
            let transformToString = String.fromCharCode(transformToAscii);
            // console.log(transformToAscii, transformToString)
            if(mapSkipArray.get(transformToString)){
                copyIndex ++;
            }
            finalLetter.push(transformToString);
            if(finalLetter.length === copyIndex){
                returnLetterArray.push(finalLetter[copyIndex - 1]);
            }
            counter ++;
        }
    })
    answer = returnLetterArray.join(',').replaceAll(',', '');
    console.log(answer)
    return answer;
}

// solution(s, skip, index);

function solutionBYGPT(s, skip, index) {
    var answer = '';
    const skipSet = new Set(skip); // skip에 있는 문자를 빠르게 조회하기 위해 Set 사용

    for (let i = 0; i < s.length; i++) {
        let currentChar = s[i];
        let count = 0;
        
        while (count < index) {
            // 들어오는 s의 char를 1 증가시키기
            // type string
            currentChar = String.fromCharCode(currentChar.charCodeAt(0) + 1);
            
            // z를 넘어가는 경우 a로 돌아가기
            if (currentChar > 'z') {
                currentChar = 'a';
            }
            
            /**
             * GPT 선생님의 일침
             * map 메소드 중에서 has를 사용하면 map에 특정 key가 존재하는지 조회 가능
             */
            // skip에 있는 문자라면 count를 증가시키지 않음
            if (!skipSet.has(currentChar)) {
                count++;
            }
        }
        
        // while문 종료 될때마다 string에 string 덛붙히기
        answer += currentChar;
    }

    return answer;
}

console.log(solutionBYGPT(s, skip, index)); // "happy"


// node LV1/둘만의암호.js