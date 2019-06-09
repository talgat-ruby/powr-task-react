import React, {Fragment} from 'react';

import Container from '>/components/Container/';
import Button from '>/components/Button/';

const Builded = ({state, onJson}) => {
	return (
		<Fragment>
			<Button onClick={onJson}>Create JSON</Button>
			<Container currentKey={state[0][0].itemsKey} />
		</Fragment>
	);
};

export default Builded;
