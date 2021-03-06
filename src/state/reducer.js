import TYPE from './types';
import {generateRandomColor, deepenState, flattenState} from './utils';

export const ACTIONS = {
	SET_DATA: 'SET_DATA',
	ADD_BOX: 'ADD_BOX',
	DELETE_BOX: 'DELETE_BOX',
	ADD_CONTAINER: 'ADD_CONTAINER',
	CHANGE_COLOR: 'CHANGE_COLOR'
};

export function reducer(state, action) {
	switch (action.type) {
		case ACTIONS.SET_DATA: {
			return {
				...state,
				data: action.data,
				nextKey: action.nextKey
			};
		}
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
		case ACTIONS.DELETE_BOX: {
			const {data} = state;
			const {currentKey, index} = action;
			return {
				...state,
				data: {
					...data,
					[currentKey]: [
						...data[currentKey].slice(0, index),
						...data[currentKey].slice(index + 1)
					]
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
		case ACTIONS.DELETE_CONTAINER: {
			const {data} = state;
			const {currentKey} = action;
			return {
				...state,
				...flattenState(deepenState(data, currentKey))
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
