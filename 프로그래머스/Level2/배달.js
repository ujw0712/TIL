// https://school.programmers.co.kr/learn/courses/30/lessons/12978?language=javascript
function solution(N, road, K) {

	const queue = [];
	const adj = Array.from(Array(N + 1), () => new Array());
	const dist = [0, 0];

	for(let i = 0 ; i < N - 1 ; ++i) dist.push(Number.MAX_VALUE);

	road.map(info => {
		let a = info[0];
		let b = info[1];
		let c = info[2];

		adj[a].push({to: b, weight: c});
		adj[b].push({to: a, weight: c});
	});

	queue.push({
		to: 1,
		weight: 0
	});

	(function(){
		while(queue.length){
			let edge = queue.shift();
			adj[edge.to].map(next => {
				if(dist[next.to] > dist[edge.to] + next.weight){
					dist[next.to] = dist[edge.to] + next.weight;
					queue.push(next);
				}
			});
		}
	})();

	let answer = 0;
	for(let i = 1 ; i < N + 1 ; ++i){
		if(dist[i] <= K) answer++;
	}

	return answer;
}