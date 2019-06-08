import React, {useReducer, useState} from 'react';
import styles from './index.module.css';

import {StateContext, DispatcherContext, reducer, initialState} from '>/state/';

import JsonFormat from '>/components/JsonFormat/';
import Builded from '>/components/Builded/';

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [isJson, setIsJson] = useState(false);

	return (
		<div className={styles.container}>
			<DispatcherContext.Provider value={dispatch}>
				<StateContext.Provider value={state}>
					<main className={styles.main}>
						{isJson ? (
							<JsonFormat
								data={state}
								onBuild={() => {
									setIsJson(false);
								}}
							/>
						) : (
							<Builded
								data={state}
								onJson={() => {
									setIsJson(true);
								}}
							/>
						)}
					</main>
				</StateContext.Provider>
			</DispatcherContext.Provider>
		</div>
	);
};

export default App;
