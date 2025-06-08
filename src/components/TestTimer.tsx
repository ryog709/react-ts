import { useState, useEffect } from "react";

const TestTimer = () => {
	// useStateで状態管理
	const [seconds, setSeconds] = useState(0); // タイマーの秒数
	const [isRunning, setIsRunning] = useState(false); // タイマーが動いているかの状態
	const [isInfoOpen, setIsInfoOpen] = useState(true); // アコーディオンの開閉状態

	// useEffectでタイマーの副作用処理
	useEffect(() => {
		let interval: number | null = null;

		if (isRunning) {
			// タイマーが動いている時は1秒ごとに秒数を増やす
			//「prev => prev + 1」を使用
			interval = setInterval(() => {
				setSeconds((prevSeconds) => prevSeconds + 1);
			}, 1000);
		}

		// 重要：クリーンアップ処理
		return () => {
			if (interval) {
				clearInterval(interval);
			}
		};
	}, [isRunning]);

	// 時間をフォーマットする関数
	const formatTime = (totalSeconds: number) => {
		const mins = Math.floor(totalSeconds / 60);
		const secs = totalSeconds % 60;
		return `${mins}:${secs.toString().padStart(2, '0')}`;
	};

	// 開始・停止ボタンのハンドラー
	//「prev => !prev」を使用
	const handleStartStop = () => {
		setIsRunning((prev) => !prev);
	};
	// リセットボタンのハンドラー
	// 「必ずsetXXX使って更新する」
	const handleReset = () => {
		setIsRunning(false);
		setSeconds(0);
	};

	// アコーディオンの開閉ハンドラー
	const handleInfoToggle = () => {
		setIsInfoOpen((prev) => !prev);
	};

	return (
		<div className="timer-container">
			<h2 className="timer-title">タイマー</h2>

			<div className="timer-display">{formatTime(seconds)}</div>

			<div className="timer-buttons">
				<button className={`timer-button ${isRunning ? 'stop' : 'start'}`} onClick={handleStartStop}>
					{isRunning ? 'ストップ' : 'スタート'}
				</button>
				<button className="timer-button reset" onClick={handleReset}>
					リセット
				</button>
			</div>

			<div className={`timer-info ${isInfoOpen ? 'open' : 'closed'}`} onClick={handleInfoToggle}>

				<div className="timer-info-header">
					<span>詳細情報</span>
					<span className="accordion-icon">{isInfoOpen ? '▼' : '▶'}</span>
				</div>
				{isInfoOpen && (
					<div className="timer-info-content">
						<p>現在の状態: {isRunning ? '実行中' : '停止中'}</p>
						<p>経過時間: {seconds}秒</p>
					</div>
				)}
			</div>
		</div>
	);

};

export default TestTimer;