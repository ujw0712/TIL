// https://programmers.co.kr/learn/courses/30/lessons/64065?language=javascript
function solution(s) {
	let answer = [];
	let newArr = JSON.parse(s.replace(/{/g,'[').replace(/}/g,']'));
	newArr.sort((a, b) => {return a.length - b.length});
	let temp = [];
	for(let i = 0; i < newArr.length; i++) {
		for(let j = 0; j < newArr[i].length; j++) {
			temp.push(newArr[i][j]);
		}
	}
	answer = [...new Set(temp)];
	return answer;
}