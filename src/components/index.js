import React, {useState} from 'react';
import styles from './index.module.css';

import JsonFormat from '>/components/JsonFormat/';
import Builded from '>/components/Builded/';

const App = ({state}) => {
	const [isJson, setIsJson] = useState(false);

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				{isJson ? (
					<JsonFormat
						data={state}
						onBuild={() => {
							setIsJson(false);
						}}
					/>
				) : (
					<Builded
						data={state}
						onJson={() => {
							setIsJson(true);
						}}
					/>
				)}
			</main>
		</div>
	);
};

export default App;
