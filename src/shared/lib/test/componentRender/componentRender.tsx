import React from 'react';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export interface componentRenderOptions {
	route?: string;
	initialState?: DeepPartial<StateSchema>;
}

export function componentRender(
	component: ReactNode,
	options: componentRenderOptions = {},
) {
	const { route = '/', initialState } = options;
	return render(
		<StoreProvider initialState={initialState}>
			<MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>
		</StoreProvider>,
	);
}
