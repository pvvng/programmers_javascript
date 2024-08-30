const s = "one4seveneight"
// 원래 숫자 리턴

function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        /**
         * numbers를 순회하는 함수랑 같음
         * 
         * str1.split(str2)은 str1을 str2 기준으로 나누는 것
         */
        let arr = answer.split(numbers[i]);
        /**
         * answer에 인덱스 추가
         * 
         * join 메소드는 배열을 문자열로 합칠때 구분자를 추가 가능
         * 여기서 numbers의 문자를 기준으로 나누니까 나눠진문자열[0]은 반드시 빈 문자열임
         * 고로, 구분자를 인덱스로 추가하면 숫자 변경과 같은 효과를 가지게 됨
         */
        answer = arr.join(i);
    }

    return Number(answer);
}

solution(s);

// node 추천문제/숫자문자열과영단어.js