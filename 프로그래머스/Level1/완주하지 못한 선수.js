// https://programmers.co.kr/learn/courses/30/lessons/42576
function solution(participant, completion) {
  const p = participant.sort()
  const c = completion.sort()
  for (let i in p) {
    if (p[i] !== c[i]) return p[i]
  }
}