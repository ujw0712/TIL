// https://programmers.co.kr/learn/courses/30/lessons/12926
function solution(s, n) {
	var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var lower = "abcdefghijklmnopqrstuvwxyz";
	var answer= '';

	for(var i =0; i <s.length; i++){
		var text = s[i];
		if(text == ' ') {
			answer += ' ';
			continue;
		}
		var textArr = upper.includes(text) ? upper : lower;
		var index = textArr.indexOf(text)+n;
		if(index >= textArr.length) index -= textArr.length;
		answer += textArr[index];
	}
	return answer;

	// var chars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          "
	// return s.split('').map(e => chars[chars.indexOf(e)+n]).join('');
}