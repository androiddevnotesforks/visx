import React from 'react';
import { render } from '@testing-library/react';

import { PatternWaves } from '../src';

describe('<PatternWaves />', () => {
  test('it should be defined', () => {
    expect(PatternWaves).toBeDefined();
  });

  test('it should require an id prop', () => {
    // @ts-expect-error allow invalid props
    expect(() => render(<PatternWaves width={4} height={4} />)).toThrow();
  });

  test('it should require a width prop', () => {
    // @ts-expect-error allow invalid props
    expect(() => render(<PatternWaves id="test" height={4} />)).toThrow();
  });

  test('it should require a height prop', () => {
    // @ts-expect-error allow invalid props
    expect(() => render(<PatternWaves id="test" width={4} />)).toThrow();
  });
});
