# 최소 힙(min heap)을 사용할 수 있게 해줍니다. 자바스크립트에서는 힙 자료구조를 직접 구현해야 하지만, 
# 파이썬에서는 내장 모듈로 바로 사용할 수 있습니다
import heapq

scoville = [1, 2, 3, 9, 10, 12]
K = 7

def solution(scoville, K):
    # 리스트 최소힙으로 변경
    # 시간 복잡도 O(n)
    heapq.heapify(scoville)
    mix_count = 0

    # scoville = [1, 1]이고 K = 7 인 경우에
    # scovile 힙에는 3 이 남게된다.
    # 이 경우에 while 문 종료조건을 (> 0) 으로 하게되면 무한 루프가 걸림
    while len(scoville) > 1 :
        # 첫번째로 꺼낸게 K보다 크면 모든 요소가 K이상이라는 의미
        # 시간 복잡도 O(log n)
        first = heapq.heappop(scoville)
        if first >= K :
            return mix_count
        
        second = heapq.heappop(scoville)
        mixed = first + second * 2
        heapq.heappush(scoville, mixed)
        mix_count += 1
    
    # js 삼항연산자 (? :)
    return mix_count if scoville[0] >= K else -1

solution(scoville, K)
