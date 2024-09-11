const phone_book = ["119", "97674223", "1195524421"]

// 1, 5, 13, 14 실패
// 효율성 테스트 실패

// 1, 2 실패 
// 효율성 테스트 3, 4 실패

// 효율성 테스트 3, 4 실패
function solution(phone_book) {
    var answer = true;
    
    const pbSet = new Set();

    for(let i = 0; i < phone_book.length; i ++){
        pbSet.add(phone_book[i]);
    }

    for(let i = 0; i < phone_book.length; i ++){
        let prefix = '';
        let phone_number = phone_book[i];
        for(let p = 0; p < phone_number.length; p++){
            prefix += phone_number[p];
            if(pbSet.has(prefix) && prefix !== phone_number) 
                return false;
        }
    }

    return answer;
}

solution(phone_book);

// node LV2/전화번호목록.js