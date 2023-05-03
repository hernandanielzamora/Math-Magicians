import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../../components/Layout';

describe('Tests for the Layout component', () => {
  it('Should render the Layout component properly', () => {
    const quotesPage = render(<BrowserRouter><Layout /></BrowserRouter>);
    expect(quotesPage).toMatchSnapshot();
  });
});
