import React, { FunctionComponent } from 'react';

import { useState } from 'react';
import './App.css';
import { abc } from './types';
// import MyButton from './Button';

const MyButton: FunctionComponent<{ count: number; setCount: (v: number) => void }> = ({ count, setCount }) => {
	return <button onClick={() => setCount(count + 1)}>count is {count}</button>;
};

function MyButton1({ count, setCount }: { count: number; setCount: (v: number) => void }) {
	return (
		<>
			<button onClick={() => setCount(count + 1)}>count is {count}</button>;
		</>
	);
}

function App({ c, sC, m }: abc) {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					{/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
				</a>
				<a href="https://react.dev" target="_blank">
					{/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				{/* <MyButton count={count} setCount={setCount} /> */}
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	);
}

export default App;
