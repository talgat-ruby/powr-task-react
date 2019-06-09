import React, {useContext} from 'react';
import styles from './Box.module.css';

import {DispatcherContext, ACTIONS} from '>/state/';

import {ReactComponent as DeleteIcon} from '>/media/delete.svg';

const Box = ({color = 'orange', currentKey, index}) => {
	const dispatch = useContext(DispatcherContext);

	function onDelete(event) {
		event.stopPropagation();
		dispatch({type: ACTIONS.DELETE_BOX, currentKey, index});
	}

	return (
		<div
			className={styles.container}
			style={{backgroundColor: color}}
			onClick={() => dispatch({type: ACTIONS.CHANGE_COLOR, currentKey, index})}
		>
			<DeleteIcon className={styles.delete} onClick={onDelete} />
		</div>
	);
};

export default Box;
