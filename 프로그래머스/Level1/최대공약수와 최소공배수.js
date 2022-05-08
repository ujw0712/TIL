// https://programmers.co.kr/learn/courses/30/lessons/12940?language=javascript
function greatestCommonDivisor(a, b) {return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);}
function leastCommonMultipleOfTwo(a, b) {return (a * b) / greatestCommonDivisor(a, b);}
function solution(n, m) {
	return [greatestCommonDivisor(n, m),leastCommonMultipleOfTwo(n, m)];
}