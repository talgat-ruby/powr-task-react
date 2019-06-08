import React from 'react';
import styles from './Box.module.css';

const Box = ({color = 'orange'}) => {
	return <div className={styles.container} style={{backgroundColor: color}} />;
};

export default Box;
