const clothes = [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]
// 의상 수 = a, b, c ...
// 의상의 종류가 1가지 => (a + 1) - 1
// 의상의 종류가 2가지 
    // => a + b + a*b 
    // => (a+1)(b+1) => ab + a + b +1
// 의상의 종류가 3가지 
    // => a + b + c + a*b + a*c + b*c + abc => (a+1)(b+1)(c+1)
    // => (ab + a + b + 1)(c+1) => abc + ab + ac + a + bc+ b + c + 1
    // => a + b + c + ab + bc + ac + abc + 1
// 결론 => 의상의 종류가 n가지 일때 =>
    // (a + 1)(b + 1)...(n + 1) - 1 가지의 종류
function solution(clothes) {
    var answer = 1;
    const clothesMap = new Map();

    clothes.forEach(c => {
        const type = c[1];
        let get = clothesMap.get(type) || 0;
        clothesMap.set(type, get + 1);
    })

    let count = [...clothesMap.values()];
    count.forEach(c => {
        answer *= c+1;
    })

    return answer - 1;
}

console.log(solution(clothes));


// node 추천문제/의상.js