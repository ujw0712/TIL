// https://programmers.co.kr/learn/courses/30/lessons/12922?language=javascript
function solution(n) {
  // return "수박".repeat(n).substring(0,n)
  return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
}
