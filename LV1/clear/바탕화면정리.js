/**
 * 
 * 알게된점
 * 
 * 무지성으로 변수 설정하면 좢된다.
 * 제한사항도 한번 읽어보자
 * 
 */

// 시작좌표(시작x, 시작y);
// 끝좌표(끝x, 끝y)

// 이동거리 = 끝x + 끝y - (시작x + 시작y)
// 구하는게 최소 거리니까 끝 xy과 제일 크고, 시작 xy가 가장 작아야함

// 컴퓨터 바탕화면의 상태를 나타낸 문자열 배열 wallpaper
// 최소한의 이동거리를 갖는 드래그의 시작점과 끝점을 담은 정수 배열을 return
// 드래그의 시작점이 (lux, luy), 끝점이 (rdx, rdy)라면 정수 배열 [lux, luy, rdx, rdy] 리턴

// 바탕화면에는 적어도 하나의 파일이 있습니다.
// 드래그 시작점 (lux, luy)와 끝점 (rdx, rdy)는 lux < rdx, luy < rdy를 만족해야 합니다.
 
// 0 0 0 0 0
// 0 0 0 0 1 => 1 4 2 5

// 근데 나는 1 2 2 5
// 이건 반례
const wallpaper = [".....", "....#"]
function solution(wallpaper) {

    /** wallpaper.length가 최소위치들보다 작을 경우에 wallpaper.length를 최소 위치로 삼을 가능성이 존재함 */
    let 최소x위치 = Infinity;
    let 최소y위치 = Infinity;

    let 최대x위치 = -Infinity;
    let 최대y위치 = -Infinity;

    for (const [x, 한줄] of wallpaper.entries()){
        const 한줄배열 = 한줄.split('');
        for(const [y, 파일] of 한줄배열.entries()){
            if(파일 === '#'){
                최소x위치 = Math.min(최소x위치, x);
                최소y위치 = Math.min(최소y위치, y);

                최대x위치 = Math.max(최대x위치, x + 1);
                최대y위치 = Math.max(최대y위치, y + 1);
            }
        }
    }

    var answer = [최소x위치, 최소y위치, 최대x위치, 최대y위치];
    return answer;
}

console.log(solution(wallpaper))

// node LV1/바탕화면정리.js
