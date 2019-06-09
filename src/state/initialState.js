import TYPE from './types';

const initialState = {
	data: {
		'0': [{type: TYPE.CONTAINER, itemsKey: '1'}],
		'1': [{type: TYPE.BOX}, {type: TYPE.CONTAINER, itemsKey: '2'}],
		'2': [{type: TYPE.BOX, color: 'green'}, {type: TYPE.BOX, color: 'red'}]
	},
	nextKey: 3
};
export default initialState;
