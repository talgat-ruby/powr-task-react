import React, {useReducer} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/';
import * as serviceWorker from './serviceWorker';

import {StateContext, DispatcherContext, reducer, initialState} from '>/state/';

const AppWithStore = () => {
	const [store, dispatch] = useReducer(reducer, initialState);
	return (
		<DispatcherContext.Provider value={dispatch}>
			<StateContext.Provider value={store.data}>
				<App state={store.data} />
			</StateContext.Provider>
		</DispatcherContext.Provider>
	);
};

ReactDOM.render(<AppWithStore />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
