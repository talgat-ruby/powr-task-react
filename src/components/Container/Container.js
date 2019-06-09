import React, {useContext} from 'react';
import styles from './Container.module.css';

import {StateContext, TYPE} from '>/state/';

import Box from '>/components/Box/';
import AddButton from '>/components/AddButton/';

const Container = ({currentKey}) => {
	const state = useContext(StateContext);

	const renderItem = (item, i) => {
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
	};

	return (
		<div className={styles.container}>
			{state[currentKey].map(renderItem)}
			<AddButton currentKey={currentKey} />
		</div>
	);
};

export default Container;
