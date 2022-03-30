// https://programmers.co.kr/learn/courses/30/lessons/1845
function solution(nums) {
  const max = nums.length / 2
  const noDup = [...new Set(nums)].length;
  return max < noDup ? max : noDup
}