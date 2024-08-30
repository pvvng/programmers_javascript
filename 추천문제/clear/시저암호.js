// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식

const s = "a B z"
const n = 4

function solution(s, n) {
    var answer = '';
    
    for(let str of s){
        let ascii = str.charCodeAt();
        /** 
         * 기존 방식은 최대 범위를 초과할때 항상 같은 값이 출력됨
         * 범위를 계산해서 가중치를 부과하는 방식으로 변경
         */
        // 소문자
        if(97 <= ascii && ascii <= 122){
            ascii += n;

            if(ascii > 122) ascii = 97 - 1 + ascii - 122;
        }
        // 대문자
        else if (65 <= ascii && ascii <= 90){
            ascii += n;
            if(ascii > 90) ascii = (65 - 1 + ascii - 90);
        }
        answer += String.fromCharCode(ascii);
    }
    console.log(answer)
    return answer;
}

solution(s, n);

// node 추천문제/시저암호.js