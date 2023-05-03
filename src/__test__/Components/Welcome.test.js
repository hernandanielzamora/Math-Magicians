import { render } from '@testing-library/react';
import Welcome from '../../components/Welcome';

describe('Tests for the Welcome component', () => {
  it('Should render the Welcome component properly', () => {
    const quotesPage = render(<Welcome />);
    expect(quotesPage).toMatchSnapshot();
  });
});
