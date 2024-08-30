// 콜라를 받기 위해 마트에 주어야 하는 병 수 a
const a = 5
// 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수 b
const b = 3
// 상빈이가 가지고 있는 빈 병의 개수 n
const n = 21
// 상빈이가 받을 수 있는 콜라의 병 수를 return 

// 20/ 2 + 18 => 18 / 3 = 6세트 * 2 
// 14/ 2 + 12 => 12 / 3 = 4세트 * 2
// 10/ 1 + 9 => 9 / 3 = 3세트 * 2
// 7/ 1 + 6 => 6 / 3 => 2세트 * 2
// 5/ 2 + 3 => 3 / 3 => 1세트 * 2
// 4/ 1 + 3 => 3 / 3 => 1세트 * 2
// 3/ 0 + 3 => 3 / 3 => 1세트 * 2

// 18 * 2 = 36

function solution(a, b, n) {
    let sum = 0;
    let havingCoke = n;
    
    while (havingCoke >= a){
        let minus = Math.floor(havingCoke/a) * a;
        let plus = (minus/a) * b;
        sum += plus;
        havingCoke += -minus + plus;
        console.log(minus, plus, havingCoke)
    }
    return sum;
}

solution(a, b, n);

// node 추천문제/콜라문제.js