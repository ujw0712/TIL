// https://programmers.co.kr/learn/courses/30/lessons/12933?language=javascript
function solution(n) {
	const newN = n + "";
	const newArr = newN
		.split("")
		.sort()
		.reverse()
		.join("");

	return +newArr;
}