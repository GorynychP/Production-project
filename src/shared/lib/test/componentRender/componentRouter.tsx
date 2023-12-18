import React from 'react';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

export interface componentRouterOptions {
	route?: string;
}

export function componentRouter(
	component: ReactNode,
	options: componentRouterOptions = {},
) {
	const { route = '/' } = options;
	return render(<MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>);
}
