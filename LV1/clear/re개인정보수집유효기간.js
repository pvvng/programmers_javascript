const today = "2020.01.01"
const terms = ["Z 3", "D 5"]
const privacies = ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]

function solution(today, terms, privacies) {
    var answer = [];

    const termsMap = new Map();
    terms.forEach(t => {
        const [type, month] = t.split(' ');
        termsMap.set(type, month * 28);
    })

    function changeToOffset(stringDate){
        const [year, month, day] = stringDate.split('.').map(v => parseInt(v));
        return year * 336 + month * 28 + day; 
    }

    const todayOffset = changeToOffset(today);

    privacies.forEach((pv, i) => {
        const [date, term] = pv.split(' ');
        const offsetDate = changeToOffset(date);
        const termOffset = termsMap.get(term);
        if(todayOffset >= offsetDate + termOffset) answer.push(i + 1);
    })
    
    return answer;
}

solution(today, terms, privacies);

// node LV1/re개인정보수집유효기간.js