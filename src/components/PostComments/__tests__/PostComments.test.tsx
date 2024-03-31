import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '../index';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve acrescentar dois comentários ao comentario-li', () => {
        render(<PostComment />);

        fireEvent.change(screen.getByTestId('comentario-textarea'), {
            target: {
                value: 'Primeiro coment'
            }
        });
        fireEvent.click(screen.getByTestId('comentario-button'));

        fireEvent.change(screen.getByTestId('comentario-textarea'), {
            target: {
                value: 'Segundo coment'
            }
        });
        fireEvent.click(screen.getByTestId('comentario-button'));

        expect(screen.getAllByTestId('comentario-li')).toHaveLength(2);
    })
});