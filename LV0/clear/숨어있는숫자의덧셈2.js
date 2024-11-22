const my_string = "1a2b3c4ed123Z"

function solution(my_string) {
    const newArr = my_string.split("").map(v => {
        if(Number.isNaN(parseInt(v))) return ".";
        return v;
    })

    let num = 0;
    newArr.join("").replaceAll('.',' ').split(" ").forEach(e => {
        if(Number.isInteger(parseInt(e))) num += parseInt(e);
    });

    return num;
}

solution(my_string);

// node LV0/숨어있는숫자의덧셈2.js