const n = 4
const a = 2
const b = 3
// if(b % 2 === 0) => round = b/2
// if(b % 2 === 1) => round = (b+1)/2
// 몇 번째 라운드에서 만나는지 return
// 12 34 56 78
// 12(a) 34(b)
// 12 (m)

// 1r=>2**(round + 1) - 1 2r =>7
// 12 34
// 1 2
// a+b = 2**(x + 1) -1
// x는 자연수
// a+b+1 = 2**(x+1)
// log2(a+b+1) = x + 1
// log2(a+b+1) - 1 =x

// 7 9 27 33 실패
function solution(n,a,b){

    let x = Math.log2(n);

    let Around = a;
    let Bround = b;
    for(let i = 1; i <= x; i++){
        /** 
         * 1 차이로만 구분하면 다른 라운드에 존재하는 경우도 리턴하게 됨
         * 즉, 단순히 1 차이로만 구분하지 말고 
         * 같은 라운드에 있을때만 return 해야함 
         * 
         * a, b가 같은 라운드에 존재하면 항상 짝수가 홀수보다 큰 값을 가짐
         * */
        if(Around % 2 === 0 && Bround % 2 === 1) {
            if(Around - Bround === 1) return i;
        }else if (Bround % 2 === 0 && Around % 2 === 1){
            if(Bround - Around === 1) return i;
        }
        Around = Around % 2 === 0 ? Around/2 : (Around+1)/2
        Bround = Bround % 2 === 0 ? Bround/2 : (Bround+1)/2
    }
}

console.log(solution(n, a, b));

// node LV2/예상대진표.js