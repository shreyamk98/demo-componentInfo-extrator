import * as React from 'react';

export interface ISampleProps extends React.HTMLAttributes<HTMLElement> {
  /** docs */
  foo: string;

  bar?: number;

  onChanged: (ev: Event, value: number) => void;
}
