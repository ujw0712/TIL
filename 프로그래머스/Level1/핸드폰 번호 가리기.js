// https://programmers.co.kr/learn/courses/30/lessons/12948?language=javascript
function solution(phone_number) {
	return phone_number.replace(/\d(?=\d{4})/g, '*')
}