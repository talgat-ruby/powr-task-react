import React, {useContext} from 'react';
import styles from './Container.module.css';

import {TYPE} from '>/state';

import {StateContext} from '>/state/';
import Box from '>/components/Box/';
import AddButton from '>/components/AddButton/';

const Container = ({itemsKey}) => {
	const state = useContext(StateContext);

	const renderItem = (item, i) => {
		switch (item.type) {
			case TYPE.CONTAINER:
				return <Container key={i} itemsKey={item.itemsKey} />;
			case TYPE.BOX:
				return <Box key={i} color={item.color} />;
			default:
				return null;
		}
	};

	return (
		<div className={styles.container}>
			{state[itemsKey].map(renderItem)}
			<AddButton />
		</div>
	);
};

export default Container;
