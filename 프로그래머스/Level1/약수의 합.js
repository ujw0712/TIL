// https://programmers.co.kr/learn/courses/30/lessons/12928?language=javascript
function solution(num) {
  let sum = 0
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) sum += i
  }
  return sum
}