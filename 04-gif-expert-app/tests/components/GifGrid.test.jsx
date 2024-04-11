import { fireEvent, render, screen } from "@testing-library/react";
import GifGrid from "../../src/components/GifGrid";

describe('Pruebas en <GifGrid/>', () => {
    const category = 'Evangelion';
    test('Debe de mostrar el loading inicialmente!', () => {
        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });
});
