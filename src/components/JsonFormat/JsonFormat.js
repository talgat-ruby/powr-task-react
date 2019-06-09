import React, {Fragment, useState, useContext} from 'react';
import styles from './JsonFormat.module.css';

import {deepenState, flattenState, DispatcherContext, ACTIONS} from '>/state/';

import Button from '>/components/Button/';

const JsonFormat = ({state, onBuild}) => {
	const dispatch = useContext(DispatcherContext);
	const [value, setValue] = useState(JSON.stringify(deepenState(state)));

	function onClick() {
		dispatch({type: ACTIONS.SET_DATA, ...flattenState(JSON.parse(value))});
		onBuild();
	}

	return (
		<Fragment>
			<Button onClick={onClick}>Build</Button>
			<textarea
				name="state"
				className={styles.textarea}
				rows="20"
				cols="150"
				value={value}
				onChange={({currentTarget: {value}}) => setValue(value)}
			/>
		</Fragment>
	);
};

export default JsonFormat;
