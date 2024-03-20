
import { render } from '@testing-library/react';
import FirstApp from './FirstApp';

describe('Pruebas en <FirstApp />', () => {
    test('Debe hacer match con el snapshot', () => {
        const title = 'Hola mundo';
        const { container } = render(<FirstApp title={title} />);

        expect(container).toMatchSnapshot();
    });
    test('Debe mostrar el titulo en h1', () => {
        const title = 'Hola mundo';
        const { container, getByText } = render(<FirstApp title={title} />);

        const h1 = container.querySelector('h1');

        expect(h1.innerHTML).toContain(title);
        expect(getByText(title)).toBeTruthy();
    });
})
