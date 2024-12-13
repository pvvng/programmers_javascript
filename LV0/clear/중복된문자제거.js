const my_string = "We are the world"

function solution(my_string) {
    return [...new Set(my_string.split(""))].join("");
}

solution(my_string);

// node LV0/중복된문자제거.js