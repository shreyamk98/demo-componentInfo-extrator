import * as React from 'react';
import { ISampleProps } from './Sample.types';

/**
 * Doc comment
 */
export const Sample: React.FunctionComponent<{
	foo: string;

	bar?: number;

	onChanged: (ev: Event, value: number) => void;
}> = (props) => {
	return <div>Some content here</div>;
};
