import {render} from '@testing-library/react-native';

import {Paragraph} from '@root/components';
import {Colors} from '@root/constants';

describe(`<${Paragraph.name}>`, () => {
    it('Renders children correctly', () => {
        const {getByText} = render(<Paragraph>Test Paragraph</Paragraph>);

        expect(getByText('Test Paragraph')).toBeTruthy();
    });

    it('Applies the correct styles', () => {
        const {getByText} = render(<Paragraph>Test Paragraph</Paragraph>);

        const textElement = getByText('Test Paragraph');

        expect(textElement).toHaveStyle({color: Colors.warning, fontSize: 30});
    });
});
