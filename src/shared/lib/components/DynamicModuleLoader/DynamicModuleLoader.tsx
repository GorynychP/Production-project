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
	const { children, reducers, removeAfterUnmount } = props;
	const store = useStore() as ReduxStoreWithManager;
	const dispatch = useDispatch();

	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
			store.reducerManager.add(name, reducer);
			dispatch({ type: `@INIT ${name} reducer` });
		});

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
					store.reducerManager.remove(name);
					dispatch({ type: `@DESTROY ${name} reducer` });
				});
			}
		};
	}, []);

	return <>{children}</>;
};
