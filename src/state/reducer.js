import TYPE from './types';
import {generateRandomColor} from './utils';

export const ACTIONS = {
	ADD_CONTAINER: 'ADD_CONTAINER',
	ADD_BOX: 'ADD_BOX',
	CHANGE_COLOR: 'CHANGE_COLOR'
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
		case ACTIONS.CHANGE_COLOR: {
			const {data} = state;
			const {currentKey, index} = action;
			return {
				...state,
				data: {
					...data,
					[currentKey]: [
						...data[currentKey].slice(0, index),
						{...data[currentKey][index], color: generateRandomColor()},
						...data[currentKey].slice(index + 1)
					]
				}
			};
		}
		default:
			return state;
	}
}
