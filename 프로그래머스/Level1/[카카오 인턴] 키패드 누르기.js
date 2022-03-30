// https://programmers.co.kr/learn/courses/30/lessons/67256
function solution(numbers, hand) {

  let answer = '';

  const keyPad = {
    1:  [0,0],
    2:  [0,1],
    3:  [0,2],
    4:  [1,0],
    5:  [1,1],
    6:  [1,2],
    7:  [2,0],
    8:  [2,1],
    9:  [2,2],
    '*':[3,0],
    0:  [3,1],
    '#':[3,2],
  }

  let leftPox = keyPad['*']
  let rightPox = keyPad['#']

  function setLeft(n) {
    answer += 'L'
    leftPox = keyPad[n]
  }

  function setRight(n) {
    answer += 'R'
    rightPox = keyPad[n]
  }


  for (let n of numbers) {
    let [ x, y ] = keyPad[n]

    if (y === 0) setLeft(n)
    if (y === 2) setRight(n)
    if (y === 1) {
      const disLeft = Math.abs(x-leftPox[0]) + Math.abs(y-leftPox[1])
      const disRight = Math.abs(x-rightPox[0]) + Math.abs(y-rightPox[1])
      if (disLeft < disRight || (disLeft === disRight && hand === 'left'))  setLeft(n)
      if (disLeft > disRight || (disLeft === disRight && hand === 'right')) setRight(n)
    }

  }

  return answer;
}