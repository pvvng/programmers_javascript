// 문자열로 구성된 리스트 strings
const strings = ["cnbc", "anbcd"]
// 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬
const n = 1
// return 	["car", "bed", "sun"]

function solution(strings, n) {
    
    /**
     * localeCompare()
     * 
     * const a = 'apple;
     * const b = 'banana';
     * 
     * console.log(a.localeCompare(b)); // -1: 'apple'이 'banana'보다 앞서 있음
     * console.log(b.localeCompare(a)); // 1: 'banana'가 'apple'보다 뒤에 있음
     * console.log(a.localeCompare('apple')); // 0: 두 문자열이 같음
     */
    return strings.sort((a, b) => 
        a[n] === b[n] ? 
        a.localeCompare(b) : 
        a[n].charCodeAt() - b[n].charCodeAt()
    );
}

console.log(solution(strings, n))

// node LV1/문자열내마음대로정렬하기.js