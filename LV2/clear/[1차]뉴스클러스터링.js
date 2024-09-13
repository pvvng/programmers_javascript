// 기타 공백이나 숫자, 특수 문자가 들어있는 경우는 그 글자 쌍을 버린다
const str1 = 'E=M*C^2';
const str2 = 'e=m*c^2';

function solution(str1, str2) {

    let set1 = new Map();
    let splitedStr1 = str1.toUpperCase().split('');
    splitedStr1.reduce((acc, cul) => {
        if(
            65 <= acc.charCodeAt() && 
            acc.charCodeAt() <=90 && 
            65 <= cul.charCodeAt() && 
            cul.charCodeAt()<=90
        ){
            let getter = set1.get(acc+cul) || 0;
            set1.set(acc+cul, getter + 1);
        }
        return cul;
    })
    let set2 = new Map();
    let splitedStr2 = str2.toUpperCase().split('');
    splitedStr2.reduce((acc, cul) => {
        if(
            65 <= acc.charCodeAt() && 
            acc.charCodeAt() <=90 && 
            65 <= cul.charCodeAt() && 
            cul.charCodeAt()<=90
        ){
            let getter = set2.get(acc+cul) || 0;
            set2.set(acc+cul, getter + 1);
        }
        return cul;
    })

    if(set1.size === 0 && set2.size === 0) return 65536;
    
    const intersection = new Map();
    const union = new Map();

    // 교집합
    set1.forEach((value, s1) => {
        if(set2.get(s1)){
            intersection.set(s1, Math.min(set2.get(s1), value))
        }
        union.set(s1, value);
    })
    set2.forEach((value, s2) => {
        if(union.get(s2)){
            union.set(s2, Math.max(union.get(s2), value));
        }else{
            union.set(s2, value);
        }
    })
    let unionSum = 0;
    union.forEach((uv) => {
        unionSum += uv;
    })
    let intersectionSum = 0;
    intersection.forEach((iv) => {
        intersectionSum += iv;
    })
    return (parseInt((intersectionSum/unionSum)*65536))
}

console.log(solution(str1, str2));

// node LV2/[1차]뉴스클러스터링.js