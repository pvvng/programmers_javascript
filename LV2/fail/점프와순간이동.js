const n = 5000
// (현재까지 온 거리 : 2) x 2        
// 건전지 사용량의 최솟값을 return   
function solution(n){
    var ans = 0;
    while(n !== 0){
        if(n % 2 === 1) {n -= 1; ans++;}
        else if (n % 2 === 0) {n/= 2;}
    }
    return ans;
}

solution(n);

// node LV2/점프와순간이동.js