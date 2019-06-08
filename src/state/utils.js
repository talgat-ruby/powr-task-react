import TYPE from './types';

export function flattenState(deep = {}) {
	let nextKey = 0;
	const state = {};
	if (deep.type === TYPE.CONTAINER && Array.isArray(deep.items)) {
		nextKey = normalize(nextKey, state, [deep]) + 1;
	}
	return {state, nextKey};
}

function normalize(currentKey, state, items = []) {
	let key = currentKey;
	state[currentKey] = items.map(item => {
		if (item.type === TYPE.CONTAINER && Array.isArray(item.items)) {
			const nextKey = key + 1;
			key = normalize(nextKey, state, item.items);
			return {type: item.type, itemsKey: nextKey};
		}
		return item;
	});

	return key;
}

export function deepenState(flat) {
	if (Array.isArray(flat[0])) {
		return getItems(flat)[0];
	}
}

function getItems(flat, key = 0) {
	const flatItems = flat[key];
	return flatItems.map(item => {
		if (item.type === TYPE.CONTAINER && item.itemsKey) {
			const items = getItems(flat, item.itemsKey);
			return {type: item.type, items};
		}
		return item;
	});
}
