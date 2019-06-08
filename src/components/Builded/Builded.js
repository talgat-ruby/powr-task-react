import React, {Fragment} from 'react';

import Container from '>/components/Container/';
import Button from '>/components/Button/';

const Builded = ({data, onJson}) => {
	return (
		<Fragment>
			<Button onClick={onJson}>Create JSON</Button>
			<Container data={data} level={0} />
		</Fragment>
	);
};

export default Builded;
