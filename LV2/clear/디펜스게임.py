import heapq

n = 3
k = 1
enemy = [3, 4]

def solution(n, k, enemy):
    answer = 0
    # 최대힙
    pre = []
    for e in enemy :
        # heap에 지난 요소 집어넣기
        heapq.heappush(pre, -e);
        n -= e
        if n < 0:
            # 무적권 사용
            if k > 0:
                # 이전 요소중 가장 큰 값 빼서 병사 부활
                n += -heapq.heappop(pre)
                k -= 1
            else :
                break
        answer += 1
    return answer

solution(n, k, enemy)