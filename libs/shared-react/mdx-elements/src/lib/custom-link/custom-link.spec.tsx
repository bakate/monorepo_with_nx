import { render } from '@testing-library/react';

import { CustomLink } from './custom-link';

describe('CustomLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomLink as={'hello'} href={'/hello'} />);
    expect(baseElement).toBeTruthy();
  });
});
