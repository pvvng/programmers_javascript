const array = 	[3, 10, 28, 28, 12]
const n = 20;

function solution(array, n) {
    return array
    .map(v => [v, Math.abs(v-n)])
    .sort((a, b) => {
        if(a[1] - b[1] > 0) return 1;
        if(a[1] == b[1]) {
            if(a[0] > b[0]) return 1;
            if(a[0] <= b[0]) return -1;
        }
        if(a[1] - b[1]< 0)  return -1;
    })[0][0];
}

console.log(solution(array, n));

// node LV0/가까운수.js