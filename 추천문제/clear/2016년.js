// 2016년은 2월 29일이 존재 (윤년)
// 31 30 29
const a = 8;
const b = 14;
// SUN,MON,TUE,WED,THU,FRI,SAT
// 월 1 ~ 일 7
// 2016년 1월 1일은 금요일입니다
function solution(a, b) {
    let dayToStrArr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', ]
    // 1/1과 각 월의 날짜 수를 알고 있으니까 일에 가중치를 더하면 될것같은뎅
    let monthDay = [31, 29, 31, 30, 31, 30 ,31, 31, 30, 31, 30, 31];
    let weightValueMap = new Map();
    monthDay.reduce((wv, cul, i) => {
        weightValueMap.set(i+1, wv);
        return wv + cul;
    }, 0);

    let weightValue = weightValueMap.get(a);
    let dayToNum = ((((weightValue + b - 1) % 7) + 5) % 7);
    return dayToStrArr[dayToNum];
}

solution(a, b);

// node 추천문제/2016년.js