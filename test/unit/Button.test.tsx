import {render, screen} from '@testing-library/react-native';

import {Button} from '@root/components';
import {Colors} from '@root/constants';

describe(`<${Button.name}>`, () => {
    it('Renders children correctly', async () => {
        render(<Button link="/test">Click Me</Button>);

        const button = await screen.findByRole('link');

        expect(button).toHaveTextContent('Click Me');
    });

    it('Has the correct link href', async () => {
        const {findByText} = render(<Button link="/test">Click Me</Button>);

        const button = await findByText('Click Me');

        expect(button).toHaveProp('href', '/test');
    });

    it('Applies the correct styles', () => {
        const {getByRole} = render(<Button link="/test">Click Me</Button>);

        const button = getByRole('link');

        expect(button).toHaveStyle({
            backgroundColor: Colors.success,
            borderColor: Colors.warning,
            borderRadius: 10,
            borderWidth: 2,
            color: Colors.dark,
            fontSize: 20,
            margin: 15,
            padding: 15,
        });
    });
});
