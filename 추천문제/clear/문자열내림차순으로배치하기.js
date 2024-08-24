const s = "Zbcdefg";
// 대문자는 소문자보다 작은 것으로 간주합니다.
const result = "gfedcbZ";
function solution(s) {
    // 대문자 65 ~ 90
    // 소문자 97 ~ 122
    var answer = '';

    /** 
     * 내림차순 정렬이라면 굳이 lower, upper 구분할 필요 없음
     * charCodeAt으로 역순정렬시키면 됨
     */
    answer = [...s].sort((a, b) => b.charCodeAt() - a.charCodeAt()).join('')

    console.log(answer)
    return answer;
}

solution(s)

// node 추천문제/문자열내림차순으로배치하기.js