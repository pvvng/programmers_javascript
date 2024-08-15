// 오늘 날짜를 의미하는 문자열 today
const today = "2009.12.31"
// 약관의 유효기간을 담은 1차원 문자열 배열 terms
const terms = ["A 13"]
// 수집된 개인정보의 정보를 담은 1차원 문자열 배열 privacies
// 모든 달은 28일까지 있다고 가정합니다.
const privacies = ["2008.11.03 A"]

// 파기해야 할 개인정보의 번호를 오름차순으로 1차원 정수 배열에 담아 return 
// index 1부터 시작
const result = [1]

// 1, 17 실패
function solution(today, terms, privacies) {
    var answer = [];

    // today y-m-d로 분할
    const todaySplitArr = today.split('.');
    const todaySplitObj = {
        year : parseInt(todaySplitArr[0]),
        month : parseInt(todaySplitArr[1]),
        day : parseInt(todaySplitArr[2]),
    }

    // terms 미리 매핑
    const termDataMap = new Map();
    terms.forEach(t => {
        const [termName, month] = t.split(' ');
        termDataMap.set(termName, parseInt(month));
    })

    for([index, privacy] of privacies.entries()){
        const [startDate, termType] = privacy.split(' ');
        const nowIndex = index + 1;

        let [startYear, startMonth, startDay] = startDate.split('.');
        startYear = parseInt(startYear);
        startMonth = parseInt(startMonth);
        startDay = parseInt(startDay);

        // 약관에 대한 개월 수 읽어오기
        let termMonth = termDataMap.get(termType);

        // 약관의 개월 수 만큼 month 더하기 
        let endMonth = startMonth + termMonth;

        /** endMonth가 12의 배수인 경우의 처리도 진행해야함 */
        let endYear = 0;
        /** endMonth가 12의 배수가 아닐 경우엔 기존 로직대로 실행 */
        if(endMonth % 12 !== 0){
            endYear = startYear + parseInt(endMonth / 12);
            endMonth = endMonth % 12;
        /** endMonth가 12의 배수일 경우 */
        }else{
            /** 우선 endMonth 값을 12로 나눈 값에 1을 빼준다
             * if) endMonth === 36
             * endMonth / 12 = 3
             * 3 - 1 = 2
             * 
             * 해당 값을 endYear에 가중치로 더한다.
             * 그리고 endMonth를 12로 조정한다
             */
            endYear = startYear + parseInt(endMonth / 12) - 1;
            endMonth = 12
        }

        let endDay = startDay;

        // 약관 종료일

        // 오늘의 날짜
        let todayYear = todaySplitObj.year;
        let todayMonth = todaySplitObj.month;
        let todayDay = todaySplitObj.day;

        // 파기하는 경우
        // 1. 오늘의 년도가 종료 년도보다 클때
        // 2. 오늘의 년도가 같은 경우, 오늘의 달이 종료 달보다 클때
        // 3. 오늘의 년도가 같은 경우, 오늘의 달이 같은 경우, 오늘의 일이 종료 일보다 클때
        if(todayYear > endYear){
            answer.push(nowIndex);
        }
        if(
            todayYear === endYear && 
            todayMonth > endMonth
        ){
            answer.push(nowIndex);
        }
        if(
            todayYear === endYear && 
            todayMonth === endMonth && 
            todayDay >= endDay
        ){
            answer.push(nowIndex);
        }
    }
    console.log(answer)
    return answer;
}

solution(today, terms, privacies);

// node LV1/개인정보수집유효기간.js