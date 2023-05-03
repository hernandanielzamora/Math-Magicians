import React from 'react';
import { render } from '@testing-library/react';
import Quotes from '../components/Quotes';

describe('Tests for the Quotes page', () => {
  it('Should render the Quotes page properly', () => {
    const quotesPage = render(<Quotes />);
    expect(quotesPage).toMatchSnapshot();
  });
});
