const s = "pPoooyY"	

function solution(s){
    let ls = s.toLowerCase().split('');
    return ls.filter(v => v == 'p').length === ls.filter(v => v == 'y').length?
    true:false;
}

solution(s);

// node LV1/문자열내p와y의개수.js