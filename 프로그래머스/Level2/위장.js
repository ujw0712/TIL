// https://school.programmers.co.kr/learn/courses/30/lessons/42578?language=javascript
function solution(clothes) {
	return Object.values(clothes.reduce((obj, t)=> {
		obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
		return obj;
	} , {})).reduce((a,b)=> a*(b+1), 1)-1;
}