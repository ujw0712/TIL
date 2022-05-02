// https://programmers.co.kr/learn/courses/30/lessons/12931?language=javascript
function solution(n){
	return (n+"").split("").reduce((acc, cur) => acc + parseInt(cur), 0)
}