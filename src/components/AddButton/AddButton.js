import React, {useContext} from 'react';
import styles from './AddButton.module.css';

import {ACTIONS} from '>/state';

import {DispatcherContext} from '>/state/';
import Button from '>/components/Button/';

const AddButton = ({itemsKey}) => {
	const dispatch = useContext(DispatcherContext);
	return (
		<div className={styles.container}>
			<Button>Add</Button>
			<div className={styles['tooltip-buttons']}>
				<Button onClick={() => dispatch({type: ACTIONS.ADD_BOX, itemsKey})}>
					Box
				</Button>
				<Button
					onClick={() => dispatch({type: ACTIONS.ADD_CONTAINER, itemsKey})}
				>
					Container
				</Button>
			</div>
		</div>
	);
};

export default AddButton;
