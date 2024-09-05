// 입차된 후에 출차된 내역이 없다면, 23:59에 출차된 것으로 간주
// 초과한 시간이 단위 시간으로 나누어 떨어지지 않으면, 올림합니다.
const fees = [180, 5000, 10, 600]
// 기본 시간, 기본 요금, 단위 시간, 단위 요금
const records = ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]
// . 차량 번호가 작은 자동차부터 청구할 주차 요금을 차례대로 정수 배열에 담아서 return
function solution(fees, records) {
    const [deafultTime, defaultFee, plusTime, plusFee] = fees;

    const recordsMap = new Map();
    records.forEach(r => {
        let [strTime, num, state] = r.split(' ');
        let [hour, miniute] = strTime.split(':');
        hour = parseInt(hour) * 60 ;
        miniute = parseInt(miniute);

        const numTime = hour + miniute;
        let record =  recordsMap.get(num) || []; 
        recordsMap.set(num, [...record, {t : numTime, s :state}])
    });
    recordsMap.forEach((record, num) => {
        if(record.length % 2 === 1) recordsMap.set(
            num, [...recordsMap.get(num), {t: 1439, s:'OUT'}]
        )
    })   
    var answer = new Map();
    recordsMap.forEach((record, num) => {
        num = parseInt(num);
        let tempObj = {[num] : 0};
        for(let i=0; i < record.length; i=i+2){
            let sumTime = record[i+1].t - record[i].t;
            tempObj[num] += sumTime;
        }
        if(tempObj[num] < deafultTime){
            answer.set(num, defaultFee);
        }else{
            let fee = defaultFee + 
            Math.ceil((tempObj[num] - deafultTime) / plusTime) * plusFee;
            answer.set(num, fee);
        }
    })
    answer = new Map([...answer].sort((a,b) => a[0] - b[0]));
    return [...answer.values()];
}

solution(fees, records);

// node 추천문제/주차요금계산.js