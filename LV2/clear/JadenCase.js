const s = "3people   unFollowed me";

// 런타임 에러
function solution(s) {
    let SToArr = s.split(' ');
    SToArr.forEach((str, i) => {
        /** 
         * 문제 조건 중
         * "공백문자가 연속해서 나올 수 있습니다."
         * 를 막기위해 코드 추가
         * */
        if(str !== ''){
            SToArr[i] = str[0].toUpperCase() 
            + str.slice(1, str.length).toLowerCase()
        }
    })
    return SToArr.join(' ')
}

solution(s);

// node LV2/JadenCase.js