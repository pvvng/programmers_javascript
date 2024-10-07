const files = ["F-15", "F-15", "F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]

// 3, 4, 5, 12, 13, 19, 20 실패
// https://school.programmers.co.kr/questions/42025
function solution(files) {
    const fileMap = [];
    files.forEach((file, i) => {
        let [h, n, t] = ['', '', ''];
        let tag = 's'
        file.split('').forEach(f => {
            let ps = parseInt(f);
            if(Number.isNaN(ps) && f !== ' '){
                if(tag === 's') h += f.toLowerCase();
                else if (tag === 'e') {
                    t += f;
                    tag = 'f';
                }
            }else if(Number.isInteger(ps) && tag !== 'f'){
                n += f;
                tag = 'e';
            }
        })
        fileMap.push({
            head : h, 
            num : parseInt(n), 
            tail : t, 
            index : i
        });
    });

    console.log(fileMap)
    fileMap.sort((a, b) => {
        if (a.head < b.head) return -1;
        if (a.head > b.head) return 1;
        if (a.head === b.head){
            if(a.num < b.num) return -1;
            if(a.num > b.num) return 1;
            if(a.num === b.num){
                if(a.index > b.index) return 1;
                if(a.index < b.index) return -1;
            }
        }
        return 0;
    });

    return fileMap.map(v => v.index).map(im => {return files[im];});
}

solution(files);

// node LV2/[3차]파일명정렬.js