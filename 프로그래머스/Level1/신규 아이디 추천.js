// https://programmers.co.kr/learn/courses/30/lessons/72410
function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .slice(0, 15).replace(/\.$/, '')
  return answer.length < 3 ? answer.padEnd(3,answer.charAt(answer.length-1)) : answer
}