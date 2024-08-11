/**
 * 알게된점
 * 
 * 문제 정답률 낮은 이유가 아마 시간 복잡도 부분에서 문제 생긴것 같음
 * 1 ≤ report의 길이 ≤ 200,000가 제한 사항인데, 그럼 이중 반복문 사용시 최악의 경우에
 * O(200,000 * 200,000) 의 시간복잡도 가질수도..?
 * 
 * 어쨋든 원트컷 푸하핫
 * 이지하구먼
 */

// 이용자의 ID가 담긴 문자열 배열 id_list
const id_list = ["con", "ryan"];
// 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 report
const report = ["ryan con", "ryan con", "ryan con", "ryan con"];
// 정지 기준이 되는 신고 횟수 k
const k = 3;

// 각 유저별로 처리 결과(정지된 경우만) 메일을 받은 횟수를 배열에 담아 return
// return [2,1,1,0]

// 한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.

function solution(id_list, report, k) {
    var answer = [];
    const deDuplicationedReport = [...new Set(report)];
    const reportMap = new Map();

    // 이용자 이름 => 신고 횟수 기본값 (0) / 이용자가 신고한 사람 map에 기록
    id_list.forEach(name => {
        reportMap.set(name, {user : name, report : 0, reported_user : [], status : true});
    })

    deDuplicationedReport.forEach((r) => {
        const [user, reportedUser] = r.split(' ');
        let findData = {...reportMap.get(reportedUser)};
        // 신고 횟수 추가
        findData.report ++;
        // 신고한 사용자 명단에 집어넣기
        findData.reported_user.push(user);
        // 신고 누적 사용자 블락 (status false)
        if(findData.report >= k){
            findData.status = false;
        }

        reportMap.set(reportedUser, {...findData});
    })

    // 차단된 유저 어레이
    // 사실 아래 과정 생략하고 
    // 그냥 reportMap 순회하면서 block된 유저를 신고한 유저 어레이 이중 반복하면 편하긴 함
    // 근데 이러면 시간 복잡도 레전드라서 그냥 번거롭게 해봄
    const blockedUser = [];
    reportMap.forEach(rm => {
        if(!rm.status){
            blockedUser.push(...rm.reported_user);
        }
    })

    // 결과 report 맵핑
    const sendReportMap = new Map();

    id_list.forEach(name => {
        sendReportMap.set(name, 0);
    })

    blockedUser.forEach(bu => {
        let report = sendReportMap.get(bu);
        sendReportMap.set(bu, report + 1);
    })

    const sendReportArr = [];

    sendReportMap.forEach((bu) => {
        sendReportArr.push(bu);
    })

    answer = [...sendReportArr];

    // console.log(answer)

    return answer;
}

solution(id_list, report, k)
// node LV1/신고결과받기.js