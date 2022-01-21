import React from 'react';

import Display from './Display';



export default function Stopwatch () {
	let [running, setRunning] = React.useState(false);
	let [centiSeconds, setCentiSeconds] = React.useState(0);

	function startOrStop () {
		setRunning(!running);
	}

	function tickClock () {
		setCentiSeconds(centiSeconds + 1);
	}

	return (
		<div className="max-w-lg m-auto px-4 py-8 bg-rose-400 text-center">
			<Display centiSeconds={centiSeconds} />
			<div className="" onClick={startOrStop}>
				{running ? "Stop" : "Start"}
			</div>
		</div>
	);
}


