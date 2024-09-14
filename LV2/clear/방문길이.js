const dirs = "LULLLLLLU";

// 8 ~ 20 실패
function solution(dirs) {
    var answer = 0;
    let nowDirection = '0/0';
    const moveingSet = new Set();

    dirs.split('').forEach(direction => {
        let splitedDir = nowDirection.split('/').map(v => parseInt(v));
        if(direction === 'U'){
            nowDirection = updatedDir(splitedDir, [0,1]).join('/')
        }
        else if(direction === 'D'){
            nowDirection = updatedDir(splitedDir, [0,-1]).join('/')
        }
        else if(direction === 'L'){
            nowDirection = updatedDir(splitedDir, [-1,0]).join('/')
        }
        else if(direction === 'R'){
            nowDirection = updatedDir(splitedDir, [1,0]).join('/')
        }
        let joinedStr = `${splitedDir.join('/')}=>${nowDirection}`;
        /** reversed된 이동 방향도 확인 */
        let reversedStr = `${nowDirection}=>${splitedDir.join('/')}`
        if(
            !moveingSet.has(joinedStr) && 
            !moveingSet.has(reversedStr) &&
            splitedDir.join('/') !== nowDirection
        ){
            moveingSet.add(joinedStr);
            answer++;
        }
    });
    return answer;
}

function updatedDir(nowDirection, offset){
    let x = nowDirection[0] + offset[0];
    let y = nowDirection[1] + offset[1];
    if(x >=-5 && x <= 5 && y >=-5 && y <= 5){
        return [x,y];
    }else{
        return nowDirection;
    }
}

solution(dirs)

// node LV2/방문길이.js