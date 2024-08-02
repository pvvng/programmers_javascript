
// S : 시작 지점
// O : 이동 가능한 통로
// X : 장애물
const park = ["OSO","OOO","OXO","OOO"];

// N : 북쪽으로 주어진 칸만큼 이동합니다.
// S : 남쪽으로 주어진 칸만큼 이동합니다.
// W : 서쪽으로 주어진 칸만큼 이동합니다.
// E : 동쪽으로 주어진 칸만큼 이동합니다.
const routes = ["E 2","S 3","W 1"];

// return모든 명령을 수행 후 놓인 위치
// result = [2,1]

// 주어진 방향으로 이동할 때 공원을 벗어나는지 확인합니다.
// 주어진 방향으로 이동 중 장애물을 만나는지 확인합니다.
// 위 두 가지중 어느 하나라도 해당된다면, 로봇 강아지는 해당 명령을 무시하고 다음 명령을 수행합니다.

// 표임
/**
        y0 y1 y2
    x0  O  S  O
    x1  O  O  O
    x2  O  X  O
    x3  O  O  O
 */

// 좌표임
/**
    E => [1,0];
    W => [-1,0];
    N => [0,-1];
    S => [0,1];
 */

function solution(park, routes) {

    // 미친새끼 두고보자
}

solution(park, routes)

// node LV1/공원산책.js

