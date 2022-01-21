


function padZero (num) {
	return (num < 10) ? "0" + num : num;
}

export default function Display ({centiSeconds}) {
	let minutes = Math.floor(centiSeconds / 100 / 60);
	let seconds = Math.floor(centiSeconds / 100) % 60;
	let cs = centiSeconds % 100;

	minutes = padZero(minutes);
	seconds = padZero(seconds);
	cs = padZero(cs);

	return (
		<div className="px-4 py-8 bg-rose-400 text-center">
			<h2 className="text-2xl">Reactry's Stopwatch</h2>
			<div className="text-4xl p-4">
				<span>{minutes}</span>
				<span>:</span>
				<span>{seconds}</span>
				<span className="text-2xl">{cs}</span>
			</div>
		</div>
	);
}


