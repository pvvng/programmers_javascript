// 직사각형 네 꼭짓점의 좌표 
// [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots
const dots = [[0, 1], [10, 1], [10, 3], [0, 3]]

// 직사각형의 넓이를 return
// result 1

function solution(dots) {

    let x = [];
    let y = [];
    dots.forEach(d => {
        x.push(d[0]);
        y.push(d[1]);
    })
    return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
}
solution(dots);

// node 추천문제/직사각형넓이구하기.js