const cacheSize = 0
const cities = ["Jeju", "Jeju"]

/**
 * LRU(Least Recently Used) 캐시 알고리즘은 
 * 최근에 사용되지 않은 데이터를 
 * 가장 오래된 데이터로 간주하여 캐시에서 제거하는 전략
 */
/** 7, 17 실패 */
function solution(cacheSize, cities) {
    var answer = 0;

    // 1. 캐시의 길이가 size 이하일때
    //     => 그냥 push
    // 2. 캐시의 길이가 size 초과할떄
    //     2-1. 새롭게 들어오는 데이터가 이미 캐시에 존재할때
    //         => 기존 캐시에 존재하는 데이터를 캐시 맨 뒤로 보내기 
    //     2-2. 새롭게 들어오는 데이터가 캐시에 존재하지 않을때
    //         => shift후 push

    let cache = [];

    for(let i = 0; i < cities.length; i++){
        /** 대소문자 구분 없애기 */
        let city = (cities[i]).toLowerCase();
        /** 시간 더하기 */
        cache.includes(city) ? answer += 1 : answer += 5;

        /** 캐시 배열 조절 */
        if(cache.length === cacheSize){
            if(cache.includes(city)){
                cache.splice(cache.indexOf(city),1);
            }else{
                cache.shift();
            }
        }
        /** 현재 chache array length cacheSize 보다 작을때만 push */
        if(cache.length < cacheSize) cache.push(city);
    }

    return answer;
}

solution(cacheSize, cities);

// node LV2/캐시.js
