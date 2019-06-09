import TYPE from './types';

export const ACTIONS = {
	ADD_CONTAINER: 'ADD_CONTAINER',
	ADD_BOX: 'ADD_BOX'
};

export function reducer(state, action) {
	switch (action.type) {
		case ACTIONS.ADD_BOX: {
			const {data} = state;
			const {currentKey} = action;
			return {
				...state,
				data: {
					...data,
					[currentKey]: [...data[currentKey], {type: TYPE.BOX}]
				}
			};
		}
		case ACTIONS.ADD_CONTAINER: {
			const {data, nextKey} = state;
			const {currentKey} = action;
			return {
				...state,
				data: {
					...data,
					[currentKey]: [
						...data[currentKey],
						{type: TYPE.CONTAINER, itemsKey: nextKey}
					],
					[nextKey]: []
				},
				nextKey: nextKey + 1
			};
		}
		default:
			return state;
	}
}
