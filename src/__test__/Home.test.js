import { render } from '@testing-library/react';
import Home from '../routes/Home';

describe('Tests for the Home page', () => {
  it('Should render the Home page properly', () => {
    const quotesPage = render(<Home />);
    expect(quotesPage).toMatchSnapshot();
  });
});
