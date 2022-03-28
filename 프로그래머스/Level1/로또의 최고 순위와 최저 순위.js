// https://programmers.co.kr/learn/courses/30/lessons/77484
function solution(lottos, win_nums) {
  const rank = [6,6,5,4,3,2,1]
  const min = lottos.filter(l => win_nums.includes(l)).length
  const max = lottos.filter(l => l === 0).length + min
  return [rank[max], rank[min]];
}