import React, {useContext} from 'react';
import styles from './Box.module.css';

import {DispatcherContext, ACTIONS} from '>/state/';

const Box = ({color = 'orange', currentKey, index}) => {
	const dispatch = useContext(DispatcherContext);
	return (
		<div
			className={styles.container}
			style={{backgroundColor: color}}
			onClick={() => dispatch({type: ACTIONS.CHANGE_COLOR, currentKey, index})}
		/>
	);
};

export default Box;
