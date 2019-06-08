import TYPE from './types';

export const ACTIONS = {
	ADD_CONTAINER: 'ADD_CONTAINER',
	ADD_BOX: 'ADD_BOX'
};

export function reducer(state, action) {
	switch (action.type) {
		case ACTIONS.ADD_CONTAINER:
			return {
				...state,
				items: [...state.items, {type: TYPE.CONTAINER, items: []}]
			};
		case ACTIONS.ADD_BOX:
			return {...state, items: [...state.items, {type: TYPE.BOX}]};
		default:
			return state;
	}
}
