// https://programmers.co.kr/learn/courses/30/lessons/42840
function solution(answers) {
  const a = [1,2,3,4,5]
  const b = [2,1,2,3,2,4,2,5]
  const c = [3,3,1,1,2,2,4,4,5,5]
  const result = [0,0,0]
  const answer = []

  for (const i in answers) {
    if (a[i%5] === answers[i]) result[0]++
    if (b[i%8] === answers[i]) result[1]++
    if (c[i%10] === answers[i]) result[2]++
  }

  const max = Math.max(...result)

  if (result[0] === max) answer.push(1)
  if (result[1] === max) answer.push(2)
  if (result[2] === max) answer.push(3)

  return answer
}