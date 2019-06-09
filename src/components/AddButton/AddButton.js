import React, {useContext} from 'react';
import styles from './AddButton.module.css';

import {DispatcherContext, ACTIONS} from '>/state/';

import Button from '>/components/Button/';

const AddButton = ({currentKey}) => {
	const dispatch = useContext(DispatcherContext);
	return (
		<div className={styles.container}>
			<Button>Add</Button>
			<div className={styles['tooltip-buttons']}>
				<Button onClick={() => dispatch({type: ACTIONS.ADD_BOX, currentKey})}>
					Box
				</Button>
				<Button
					onClick={() => dispatch({type: ACTIONS.ADD_CONTAINER, currentKey})}
				>
					Container
				</Button>
			</div>
		</div>
	);
};

export default AddButton;
