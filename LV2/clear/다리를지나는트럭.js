// 다리에 몇개 트럭 올라갈 수 있는지
const bridge_length = 100
const weight = 	100
const truck_weights = [10,10,10,10,10,10,10,10,10,10]
// 모든 트럭이 다리를 건너려면 최소 몇 초

// 1, 4, 5, 6, 8, 9, 10, 12, 13 실패
function solution(bridge_length, weight, truck_weights) {
    let bridge = new Array(bridge_length).fill(0);
    let ans = 0;
    let sum = 0;
    while(truck_weights.length > 0 || sum !== 0){
        let fe = truck_weights[0];
        if(fe + sum <= weight){
            fe = truck_weights.shift();
            sum += fe;
            bridge[bridge.length - 1] = fe;
        }
        let bse = bridge.shift();
        bridge.push(0);        
        // 트럭 이동 1초 소요
        ans++;
        if(bse !== 0){
            sum -= bse;
        }
        console.log(truck_weights, bridge, ans)
    }
    return ans + 1;
}

solution(bridge_length, weight, truck_weights);

// node LV2/다리를지나는트럭.js