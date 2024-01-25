import React, { ReactNode, useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
	[name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
	children: ReactNode;
	reducers: ReducersList;
	removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
	const { children, reducers, removeAfterUnmount = true } = props;
	const store = useStore() as ReduxStoreWithManager;
	const dispatch = useDispatch();

	useEffect(() => {
		const existingReducer = store.reducerManager.getReducerMap();
		Object.entries(reducers).forEach(([name, reducer]) => {
			const mounted = existingReducer[name as StateSchemaKey];
			if (!mounted) {
				store.reducerManager.add(name as StateSchemaKey, reducer);
				dispatch({ type: `@INIT ${name} reducer` });
			}
		});

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name]) => {
					store.reducerManager.remove(name as StateSchemaKey);
					dispatch({ type: `@DESTROY ${name} reducer` });
				});
			}
		};
	}, []);

	return <>{children}</>;
};
