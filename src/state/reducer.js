import TYPE from './types';

export const ACTIONS = {
	ADD_CONTAINER: 'ADD_CONTAINER',
	ADD_BOX: 'ADD_BOX'
};

export function reducer(state, action) {
	switch (action.type) {
		case ACTIONS.ADD_BOX:
			return {
				...state,
				data: {
					...state.data,
					[action.itemsKey]: [...state.data[action.itemsKey], {type: TYPE.BOX}]
				}
			};
		case ACTIONS.ADD_CONTAINER:
			return {
				...state,
				data: {
					...state.data,
					[action.itemsKey]: [
						...state.data[action.itemsKey],
						{type: TYPE.CONTAINER, itemsKey: state.nextKey}
					],
					[state.nextKey]: []
				},
				nextKey: state.nextKey + 1
			};
		default:
			return state;
	}
}
