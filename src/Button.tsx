import * as React from 'react';

function MyButton({ count, setCount }: { count: number; setCount: (v: number) => void }) {
	return <button onClick={() => setCount(count + 1)}>count is {count}</button>;
}

export default MyButton;
