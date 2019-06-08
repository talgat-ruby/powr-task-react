import React from 'react';
import styles from './Container.module.css';

import {TYPE} from '>/state';

import Box from '>/components/Box/';
import AddButton from '>/components/AddButton/';

const Container = ({data = {}, level}) => {
	const renderItem = (item, i) => {
		switch (item.type) {
			case TYPE.CONTAINER:
				return <Container key={i} data={item} level={level + 1} />;
			case TYPE.BOX:
				return <Box key={i} color={item.color} />;
			default:
				return null;
		}
	};

	return (
		<div className={styles.container}>
			{data.items.map(renderItem)}
			<AddButton />
		</div>
	);
};

export default Container;
