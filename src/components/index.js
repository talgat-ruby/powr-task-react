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
						state={state}
						onBuild={() => {
							setIsJson(false);
						}}
					/>
				) : (
					<Builded
						state={state}
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
