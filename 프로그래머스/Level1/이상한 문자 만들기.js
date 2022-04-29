// https://programmers.co.kr/learn/courses/30/lessons/12930?language=javascript
function solution(s) {
  return s.toUpperCase().replace(/(\w)(\w)/g, (a) => a[0].toUpperCase()+a[1].toLowerCase())
}