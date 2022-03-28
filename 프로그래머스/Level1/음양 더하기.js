// https://programmers.co.kr/learn/courses/30/lessons/76501
function solution(absolutes, signs) {
  let answer = 0
  for (let i in absolutes) {
    answer += signs[i] ? absolutes[i] : -absolutes[i]
  }
  return answer
}