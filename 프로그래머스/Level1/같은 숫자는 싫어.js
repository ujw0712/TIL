// https://programmers.co.kr/learn/courses/30/lessons/12906
function solution(arr) {
  return arr.filter((val,index) => val != arr[index+1]);
}
