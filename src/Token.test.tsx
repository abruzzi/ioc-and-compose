import React from 'react';
import { render } from '@testing-library/react';
import Token from './Token';

describe('Token', () => {
  it('render a simple token', () => {
    const {getByText} = render(<Token text="personal" />);
    const element = getByText('personal');
    expect(element).toBeInTheDocument();
  });

  it('render a remove button', () => {
    const {getByText} = render(<Token text="personal" isRemovable />);
    const element = getByText('personal');
    expect(element.querySelector('button')).toBeInTheDocument();
  });
})