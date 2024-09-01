// 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0
// 기울기가 같으면 평행 (y증가량 / x증가량)
// 한 점이 다른 두 점과 연결되는 경우는 제외해야함
// 점 2개로 직선을 만들고 남은 점 두개의 기울기를 구하고 이들이 평행하는지 체크
const dots = [[1, 4], [9, 2], [3, 8], [11, 6]]

// 12 ~ 17 실패
function solution(dots) {
    var answer = 0;
    for(let i = 0; i < dots.length; i++){
        for(let j = i + 1; j < dots.length; j++){
            let count = '0123';
            count = count.replaceAll(i.toString(), '');
            count = count.replaceAll(j.toString(), '');
            const x = parseInt(count.split('')[0]);
            const y = parseInt(count.split('')[1]);
            const inclination1 = (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]);
            const inclination2 = (dots[x][1] - dots[y][1]) / (dots[x][0] - dots[y][0]);
            if(inclination1 === inclination2) answer = 1;
        }
    }
    return answer;
}

solution(dots)

// node 추천문제/평행.js