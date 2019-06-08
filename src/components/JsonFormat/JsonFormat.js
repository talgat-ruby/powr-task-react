import React, {Fragment} from 'react';
import styles from './JsonFormat.module.css';

import Button from '>/components/Button/';

const JsonFormat = ({state, onBuild}) => {
	return (
		<Fragment>
			<Button onClick={onBuild}>Build</Button>
			<textarea
				name="state"
				className={styles.textarea}
				rows="20"
				cols="150"
				value={JSON.stringify(state)}
			/>
		</Fragment>
	);
};

export default JsonFormat;
