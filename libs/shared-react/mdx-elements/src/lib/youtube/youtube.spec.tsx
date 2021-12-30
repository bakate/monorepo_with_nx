import { render } from '@testing-library/react';

import Youtube from './youtube';

describe('Youtube', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Youtube title={'myVideo'} uid={'12345'} fullScreen={true} />);
    expect(baseElement).toBeTruthy();
  });
});
