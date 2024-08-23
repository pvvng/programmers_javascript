// 당신은 최대한 다양한 종류의 폰켓몬을 가지길 원하기 때문에, 
// 최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택

// N마리 폰켓몬의 종류 번호가 담긴 배열 nums
const nums = [3,1,2,3]
// 가장 많은 종류의 폰켓몬을 선택하는 방법
const result = 2;

function solution(nums) {
    var answer = 0;
    /** 어짜피 필요한건 가져갈 수 있는 
    * 포켓몬의 종류니까 중복제거 시키기  */
    let hongsPokemonCount = (new Set(nums)).size;
    const halfNumsLength = nums.length / 2;
    // let pokemonNumArr = [];

    // while(hongsPokemonArr.length !== 0){
    //     let shiftNum = hongsPokemonArr.shift()
    //     pokemonNumArr.push(shiftNum)
    //     /** 어짜피 중복제거하니까 애초에 이럴 필요가 없었음 */
    //     hongsPokemonArr = 
    //     hongsPokemonArr.filter(e => e !== shiftNum)
    // }

    answer = 
    hongsPokemonCount > halfNumsLength ? 
    halfNumsLength : hongsPokemonCount

    return answer;
}

solution(nums);

// node LV1/폰켓몬.js