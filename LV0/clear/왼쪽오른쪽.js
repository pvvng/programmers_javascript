const str_list = ["f", "u"]

function solution(str_list) {    

    for(let i = 0; i < str_list.length; i++){
        if(str_list[i] === "l") return str_list.slice(0, i);
        if(str_list[i] === "r") return str_list.slice(i + 1, str_list.length);
    };

    return [];
}

solution(str_list);

// node LV0/왼쪽오른쪽.js