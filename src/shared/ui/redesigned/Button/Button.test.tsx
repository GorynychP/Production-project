import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    test('Test render', () => {
        render(<Button>Тест</Button>);
        expect(screen.getByText('Тест')).toBeInTheDocument();
    });
    test('test clear Theme', () => {
        render(<Button theme="clear">Тест</Button>);
        expect(screen.getByText('Тест')).toHaveClass('clear');
        screen.debug();
    });
});
