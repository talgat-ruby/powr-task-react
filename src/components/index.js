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
			{/*icon credit*/}
			<div>
				Icons made by{' '}
				<a
					href="https://www.flaticon.com/authors/kiranshastry"
					title="Kiranshastry"
				>
					Kiranshastry
				</a>{' '}
				from{' '}
				<a href="https://www.flaticon.com/" title="Flaticon">
					www.flaticon.com
				</a>{' '}
				is licensed by{' '}
				<a
					href="http://creativecommons.org/licenses/by/3.0/"
					title="Creative Commons BY 3.0"
					target="_blank"
				>
					CC 3.0 BY
				</a>
			</div>
		</div>
	);
};

export default App;
