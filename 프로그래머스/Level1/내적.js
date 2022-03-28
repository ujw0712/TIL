// https://programmers.co.kr/learn/courses/30/lessons/70128
function solution(a, b) {
  return a.reduce((a, v, i) => a+(v*b[i]), 0)
}