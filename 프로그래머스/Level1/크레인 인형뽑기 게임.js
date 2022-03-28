// https://programmers.co.kr/learn/courses/30/lessons/64061
function solution(board, moves) {
  let answer = 0
  let stack = [0]

  for (let move of moves) {
    for (let b of board) {
      if (b[move-1] !== 0) {
        if (stack[stack.length-1] === b[move-1]) {
          stack.pop()
          answer += 2
        }
        else {
          stack.push(b[move-1])
        }
        b[move-1] = 0
        break
      }
    }
  }

  return answer;
}