// https://programmers.co.kr/learn/courses/30/lessons/86051
function solution(numbers) {
  return 45 - numbers.reduce((a,c) => a+c, 0)
}