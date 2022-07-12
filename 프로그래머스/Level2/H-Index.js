// https://school.programmers.co.kr/learn/courses/30/lessons/42747?language=javascript
function solution(citations) {
	citations = citations.sort(sorting);
	var i = 0;
	while(i + 1 <= citations[i]){
		i++;
	}
	return i;


	function sorting(a, b){
		return b - a;
	}
}