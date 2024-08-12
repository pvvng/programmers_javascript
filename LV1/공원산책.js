// 공원의 가로 길이가 W, 세로 길이가 H라고 할 때, 
// 공원의 좌측 상단의 좌표는 (0, 0), 우측 하단의 좌표는 (H - 1, W - 1) 입니다.
const park = ["OOO", "OSX", "OOO"];
// ["방향 거리", "방향 거리" … ]
// 명령을 수행하기 "전"에 다음 두 가지를 먼저 확인합니다.

// 주어진 방향으로 이동할 때 공원을 벗어나는지 확인합니다.
// 주어진 방향으로 이동 중 장애물을 만나는지 확인합니다.
// 해당된다면, 로봇 강아지는 해당 명령을 무시하고 다음 명령을 수행합니다.
const routes =	["E 1", "S 2", "W 1"];
// E => x+
// W => x-
// S => y+
// N => y-

// 4, 6, 14, 15 틀림
function solution(park, routes) {
    var answer = [];
    const parkMaxSizeX = park.length - 1;
    let parkMaxSizeY = 0;
    const parkMinSize = 0
    // 시작 위치 기록하는 변수
    let startArr = [];
    // 장애물 위치 기록하는 map
    const blockMap = new Map();

    for (let [x, lineStr] of park.entries()){
        const line = lineStr.split('');
        parkMaxSizeY = line.length - 1;
        for (let [y, dot] of line.entries()){
            if(dot === "S"){
                startArr = [x, y];
            }else if (dot === "X"){
                blockMap.set(JSON.stringify([x,y]), dot);
            }
        }
    }

    for(route of routes){
        const [dir, deg] = route.split(' ');
        // E => y+
        // W => y-
        // S => x+
        // N => x-
        let copyStart = [...startArr];
        let nowloc = [];

        let isSuccess = true;
        if(dir === 'S'){
            for(let i = copyStart[0]; i <= parseInt(deg) + copyStart[0]; i ++){

                if(parseInt(deg) + copyStart[0] > parkMaxSizeX){
                    isSuccess = false;
                }else{
                    // 현재 위치가 장애물의 위치와 겹치는지 판단
                    // 현재 위치가 공원 최대 경로를 이탈하는지 판단
                    let temp = [i, copyStart[1]];
                    // MAP에 저장된 값이 배열 형태면 has로 판별이 안돼서 JSON.stringify로 저장하고 그걸로 값 비교
                    let blockTest = blockMap.has(JSON.stringify(temp));

                    if(i > parkMaxSizeX || blockTest){
                        isSuccess = false;
                    }
                }
                nowloc = [i, copyStart[1]];
            }
        }
        if(dir === 'N'){
            for(let i = copyStart[0]; i >= copyStart[0] - parseInt(deg); i--){

                if( copyStart[0] - parseInt(deg) < parkMinSize){
                    isSuccess = false;
                }else{
                    let temp = [i, copyStart[1]];
                    let blockTest = blockMap.has(JSON.stringify(temp));
                    if(i < parkMinSize || blockTest){
                        isSuccess = false;
                    }
                }

                nowloc = [i, copyStart[1]];
            }
        }
        if(dir === 'E'){
            for(let i = copyStart[1]; i <= parseInt(deg) + copyStart[1]; i ++){

                if(parseInt(deg) + copyStart[0] > parkMaxSizeY){
                    isSuccess = false;
                }else{
                    let temp = [copyStart[0], i];
                    let blockTest = blockMap.has(JSON.stringify(temp));
                    if(i > parkMaxSizeY || blockTest){
                        isSuccess = false;
                    }
                }

                nowloc = [copyStart[0], i];
            }
        }
        if(dir === 'W'){
            for(let i = copyStart[1]; i >= copyStart[1] - parseInt(deg); i --){

                if(copyStart[1] - parseInt(deg) < parkMinSize){
                    isSuccess = false;
                }else{
                    let temp = [copyStart[0], i];
                    let blockTest = blockMap.has(JSON.stringify(temp));
    
                    if(i < parkMinSize || blockTest){
                        isSuccess = false;
                    }
                }
                nowloc = [copyStart[0], i];
            }
        }

        if(isSuccess){
            startArr = [...nowloc];
        }

        answer = [...startArr];
    }

    console.log(answer)
    return answer;
}

solution(park, routes);

// node LV1/공원산책.js