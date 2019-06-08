import React from 'react';
import styles from './AddButton.module.css';

import Button from '>/components/Button/';

const AddButton = () => {
	return (
		<div className={styles.container}>
			<Button>Add</Button>
			<div className={styles['tooltip-buttons']}>
				<Button>Box</Button>
				<Button>Container</Button>
			</div>
		</div>
	);
};

export default AddButton;
