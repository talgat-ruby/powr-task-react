export const TYPE = {
	CONTAINER: 'container',
	BOX: 'box'
};

export const ACTIONS = {
	ADD_CONTAINER: 'ADD_CONTAINER',
	ADD_BOX: 'ADD_BOX'
};

export const initialState = {
	type: TYPE.CONTAINER,
	items: [
		{type: TYPE.BOX},
		{
			type: TYPE.CONTAINER,
			items: [{type: TYPE.BOX, color: 'green'}, {type: TYPE.BOX, color: 'red'}]
		}
		// {type: 'container'}
	]
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

// function flattenState(deep) {
// 	const state = [];
// 	if (deep.type === TYPE.CONTAINER) {
// 		flattenContainer(state, deep);
// 	}
// 	return state;
// }

// function flattenContainer(state, container) {
// 	const itemsIndex = state.length + 1;
// 	// push current container
// 	state.push({...container, itemsIndex});
// 	// send items to next index, reserve it also
// 	state[itemsIndex] = [];

// 	for (const item of container.items) {
// 		if (item.type === TYPE.CONTAINER) {
// 			flattenContainer(state, item);
// 		} else {
// 			state[itemsIndex].push(item);
// 		}
// 	}
// }

// function deepenState(flat) {}
