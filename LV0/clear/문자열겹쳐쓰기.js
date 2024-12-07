const my_string = "He11oWor1d"
const overwrite_string = "lloWorl"
const s = 2

function solution(my_string, overwrite_string, s) {
    const [msl, osl] = [my_string.length, overwrite_string.length];
    return my_string.slice(0, s) + overwrite_string + my_string.slice(s+osl, msl);
}

solution(my_string, overwrite_string, s);

// node LV0/문자열겹쳐쓰기.js