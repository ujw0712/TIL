// https://programmers.co.kr/learn/courses/30/lessons/62048?language=javascript
function solution(w,h) {
	const slope = h / w;
	let result = 0;

	for (let i = 1; i <= w; i++) {
		result += Math.ceil(slope * i);
	}

	return ((h * w) - result) * 2;
}