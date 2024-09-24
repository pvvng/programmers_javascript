// 동영상의 길이
const video_len = "10:55"
// 기능이 수행되기 직전의 재생위치
const pos = "00:05"
// 오프닝 시작 시각
const op_start = "00:15"
// 오프닝이 끝나는 시각
const op_end = "06:55"
// 사용자의 입력
const commands = ["prev", "next", "next"]

function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';

    // 타임 오프셋으로 변환하여 체크
    let [min, sec] = pos.split(':').map(v => parseInt(v));
    let nowT = min * 60 + sec;
    let [osMin, osSec] = op_start.split(':').map(v => parseInt(v));
    let openingST = osMin * 60 + osSec; 
    let [oeMin, oeSec] = op_end.split(':').map(v => parseInt(v));
    let openingET = oeMin * 60 + oeSec; 
    let [veMin, veSec] = video_len.split(':').map(v => parseInt(v));
    let videoET = veMin * 60 + veSec;

    commands.forEach(command => {
        // 비디오 start, end point 체크
        if(nowT < 0) nowT = 0;
        else if(nowT > videoET) nowT = videoET;
        // 오프닝 스킵
        if(openingST <= nowT && nowT <= openingET){
            nowT = openingET;
        }
        if(command === 'prev') nowT-=10;
        else if(command === 'next'){ nowT+=10 }
        // 비디오 start, end point 체크
        if(nowT < 0) nowT = 0;
        else if(nowT > videoET) nowT = videoET;
        // 오프닝 스킵
        if(openingST <= nowT && nowT <= openingET){
            nowT = openingET;
        }
        answer = 
        Math.floor(nowT / 60).toString().padStart(2,'0') +
        ":" +
        (nowT % 60).toString().padStart(2,'0')
    })
    return answer;
}

solution(video_len, pos, op_start, op_end, commands)

// node LV1/동영상재생기.js