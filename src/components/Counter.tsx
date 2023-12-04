import { useState } from 'react';
import styles from './Couunter.module.scss';
const Counter = () => {
	const [count, setCoutn] = useState(0);
	const increment = () => {
		setCoutn(count + 1);
	};
	const decrement = () => {
		setCoutn(count - 1);
	};
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={increment} className={styles.btn}>
				increment
			</button>
			<button onClick={decrement} className={styles.btn}>
				decrement
			</button>
		</div>
	);
};

export default Counter;
