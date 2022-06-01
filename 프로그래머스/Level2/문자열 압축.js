// https://programmers.co.kr/learn/courses/30/lessons/60057?language=javascript
function solution(s) {
	if(s.length === 1 ) return 1
	let min = 1000
	for (let i=1; i<=s.length/2; i++) {
		let str1 = ''
		let str2 = ''
		let ans = ''
		let count = 1
		for (let j=0; j<s.length; j+=i) {
			if (j === 0) {
				str1 = s.slice(j, j + i)
			}
			else {
				str2 = s.slice(j, j + i)
				if (str1 === str2) {
					count++
					if (j+i === s.length) ans += `${count}${str1}`
				}
				else {
					ans += count > 1 ? `${count}${str1}` : str1
					count = 1
					if (str1.length > str2.length) ans += str2
					str1 = str2
					if (j+i === s.length) ans += str2
				}
			}
		}
		min = Math.min(ans.length, min)
	}
	return min
}