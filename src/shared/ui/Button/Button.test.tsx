import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
	test('Test render', () => {
		render(<Button>Тест</Button>);
		expect(screen.getByText('Тест')).toBeInTheDocument();
	});
	test('test clear Theme', () => {
		render(<Button theme={ButtonTheme.CLEAR}>Тест</Button>);
		expect(screen.getByText('Тест')).toHaveClass('clear');
		screen.debug();
	});
});
