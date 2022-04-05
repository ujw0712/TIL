// https://programmers.co.kr/learn/courses/30/lessons/12901
function solution(a, b) {
	let arr = ['SUN','MON','TUE','WED','THU','FRI','SAT']
	let day = new Date(`2016/${a}/${b}`).getDay()
	return arr[day]
}