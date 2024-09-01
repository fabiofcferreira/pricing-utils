import { formatToLabel } from '../label';

describe('Labels', () => {
  it('should generate correct labels for en-GB locale', () => {
    expect(
      formatToLabel({
        amount: 10.55,
        currency: 'GBP',
      }),
    ).toMatchSnapshot();

    expect(
      formatToLabel({
        amount: 10.2,
        currency: 'EUR',
      }),
    ).toMatchSnapshot();
  });

  it('should generate correct labels for en-US locale', () => {
    const locale = 'en-US';

    expect(
      formatToLabel({
        amount: 10.55,
        currency: 'GBP',
        locale,
      }),
    ).toMatchSnapshot();

    expect(
      formatToLabel({
        amount: 10.2,
        currency: 'EUR',
        locale,
      }),
    ).toMatchSnapshot();
  });

  it('should generate correct labels for pt-PT locale', () => {
    const locale = 'pt-PT';

    expect(
      formatToLabel({
        amount: 10.55,
        currency: 'GBP',
        locale,
      }),
    ).toMatchSnapshot();

    expect(
      formatToLabel({
        amount: 10.2,
        currency: 'EUR',
        locale,
      }),
    ).toMatchSnapshot();
  });
});
