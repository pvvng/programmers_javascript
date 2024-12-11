const strArr = ["a","bc","d","efg","hi"]

function solution(strArr) {
    const arrMap = new Map();
    strArr.forEach(v => {
        arrMap.set(v.length, (arrMap.get(v.length) || 0) + 1);
    })
    return Math.max(...arrMap.values());
}

solution(strArr);

// node LV0/문자열묶기.js