const my_string = "Programmers"

function solution(my_string) {
    const alphabetMap = new Map();
    // 65 - 90
    // 97 - 122
    for(let i = 65; i <= 122; i++){
        if(90<i && i <97) continue;
        alphabetMap.set(i, 0);
    }

    my_string.split('').forEach(e => {
        let code = e.charCodeAt();
        let getter = alphabetMap.get(code) + 1;
        alphabetMap.set(code, getter);
    });

    return [...alphabetMap].map(v => v[1])
}

solution(my_string);

// node LV0/문자개수세기.js