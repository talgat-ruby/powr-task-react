import React, {useContext} from 'react';
import styles from './Container.module.css';

import {StateContext, DispatcherContext, TYPE, ACTIONS} from '>/state/';

import Box from '>/components/Box/';
import AddButton from '>/components/AddButton/';
import {ReactComponent as DeleteIcon} from '>/media/delete.svg';

const Container = ({currentKey, notRemovable = false}) => {
	const state = useContext(StateContext);
	const dispatch = useContext(DispatcherContext);

	function onDelete(event) {
		event.stopPropagation();
		dispatch({type: ACTIONS.DELETE_CONTAINER, currentKey});
	}

	function renderItem(item, i) {
		switch (item.type) {
			case TYPE.CONTAINER:
				return <Container key={i} currentKey={item.itemsKey} />;
			case TYPE.BOX:
				return (
					<Box key={i} currentKey={currentKey} index={i} color={item.color} />
				);
			default:
				return null;
		}
	}

	return (
		<div className={styles.container}>
			{state[currentKey].map(renderItem)}
			<AddButton currentKey={currentKey} />
			{!notRemovable && (
				<DeleteIcon className={styles.delete} onClick={onDelete} />
			)}
		</div>
	);
};

export default Container;
