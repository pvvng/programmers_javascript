const order = [5, 4, 3, 2, 1]
// 즉, 가장 마지막에 보조 컨테이너 벨트에 보관한 상자부터 꺼내게 됩니다

function solution(order) {
    var answer = 0;

    // pop 하기 쉽게 reverse된 oreder 생성
    let reverseOrder = order.reverse();

    // pop 하기 쉽게 reverse된 컨테이너 생성
    let container = new Array(order.length)
    .fill(order.length).map((a, i) => a - i);

    // 서브 컨테이너
    let subContainer = [];

    while(order.length > 0){
        // 현재 요청사항
        let nowOrder = reverseOrder[reverseOrder.length - 1];
        
        // 컨테이너 마지막 물품 확인하기
        if(container[container.length - 1] === nowOrder){
            container.pop();
            reverseOrder.pop();
            answer ++;
            nowOrder = reverseOrder[reverseOrder.length - 1];
        }
        // 서브 컨테이너 마지막 물품 확인하기
        if(subContainer[subContainer.length - 1] === nowOrder){
            subContainer.pop();
            reverseOrder.pop();
            answer ++;
            nowOrder = reverseOrder[reverseOrder.length - 1];
        }
        // contianer에서 subcontainer로 물건 옮기기
        if(
            subContainer[subContainer.length - 1] !== nowOrder && 
            container[container.length -1]
        ){
            subContainer.push(container.pop());
        }
        // 컨테이너가 비었고 subContainer에서 물건을 뺄 수 없다면 종료
        if(
            container.length === 0 && 
            subContainer[subContainer.length - 1] !== nowOrder
        ){
            break;
        }
    }
    return answer;
}

solution(order);

// node LV2/택배상자.js