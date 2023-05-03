import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../../components/NavBar';

describe('Tests for the NavBar component', () => {
  it('Should render the NavBar component properly', () => {
    const quotesPage = render(<BrowserRouter><NavBar /></BrowserRouter>);
    expect(quotesPage).toMatchSnapshot();
  });
});
