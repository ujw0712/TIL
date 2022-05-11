// https://programmers.co.kr/learn/courses/30/lessons/12947?language=javascript
function solution(x) {
	var sum = 0
	var arr = String(x).split("")

	for (let i=0; i<arr.length; i++) {
		sum += Number(arr[i])
	}
	return x % sum === 0
}