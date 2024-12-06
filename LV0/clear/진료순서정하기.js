const emergency = [30, 10, 23, 6, 100]

function solution(emergency) {
    const sort = [...emergency].sort((a, b) => b-a);
    return emergency.map(v => sort.indexOf(v) + 1);
}

solution(emergency);

// node LV0/진료순서정하기.js