import TYPE from './types';

const initialState = {
	type: TYPE.CONTAINER,
	items: [
		{type: TYPE.BOX},
		{
			type: TYPE.CONTAINER,
			items: [{type: TYPE.BOX, color: 'green'}, {type: TYPE.BOX, color: 'red'}]
		}
	]
};
export default initialState;
